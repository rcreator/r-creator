import mongoose from "mongoose";
import express from "express";
import users from "./user.js";
import carts from "./cart.js";
import orders from "./orders.js";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import papersize from "./papersize.js";
import { createServer } from "http";
import { Server } from "socket.io";

const SECRET_KEY = "qazwsxedc!@#$%$#@!";
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

const connectionURL =
  "mongodb+srv://ravi-admin:8yeFAdvrMr7H48SL@cluster0.ikzxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionURL);

app.get("/", (req, res) => res.status(200).send("Working fine"));

app.post("/rcreator/newuser/create", async (req, res) => {
  try {
    const user = req.body;
    user.password = await bcrypt.hash(user.password, 10);
    await users.create(user, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res
          .status(201)
          .send(
            "You have successfully registered, Please login to your account!"
          );
      }
    });
  } catch (error) {
    res.status(500).send("Something went wrong! Please try after sometime.");
  }
});

app.post("/rcreator/login", async (req, res) => {
  try {
    const user = req.body;
    const loginuser = await users.findOne({ email: user.email });
    if (!loginuser) {
      res.status(401).send({ message: "Invalid Username or Password." });
    } else {
      if (await bcrypt.compare(user.password, loginuser.password)) {
        const token = jwt.sign({ name: loginuser.name }, SECRET_KEY);
        res
          .status(200)
          .send({ token: token, message: "You have successfully signed in" });
      } else {
        res.status(401).send({ message: "Invalid Username or Password." });
      }
    }
  } catch (error) {
    res.status(500).send("Something went wrong! Please try after sometime.");
  }
});

app.post("/rcreator/book/addcart", async (req, res) => {
  try {
    const cart = req.body;
    await carts.create(cart, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send({
          id: data._id,
          message: "Item successfully added to the cart.",
        });
      }
    });
  } catch (error) {
    res.status(500).send("Something went wrong! Please try after sometime.");
  }
});

app.post("/rcreator/book/cart", (req, res) => {
  try {
    const sea = req.body;
    const cartData = [];
    carts.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        for (let i = 0; i < data.length; i++) {
          if (i + 1 >= sea.min && i + 1 <= sea.max) {
            cartData.push(data[i]);
          }
        }
        res.status(201).send({ cartData: cartData, total: data.length });
      }
    });
  } catch (error) {
    res.status(500).send("Something went wrong! Please try after sometime.");
  }
});

app.get("/rcreator/book/cart/:id", (req, res) => {
  try {
    carts.findOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  } catch (error) {
    res.status(500).send("Something went wrong! Please try after sometime.");
  }
});

app.get("/rcreator/login/user", (req, res) => {
  try {
    carts.findOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  } catch (error) {
    res.status(500).send("Something went wrong! Please try after sometime.");
  }
});

app.delete("/rcreator/book/cart/:id", (req, res) => {
  try {
    carts.findOneAndDelete({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res
          .status(200)
          .send({ message: "Item successfully removed from cart" });
      }
    });
  } catch (error) {
    res.status(500).send("Something went wrong! Please try after sometime.");
  }
});

app.post("/rcreator/book/ordercreate", async (req, res) => {
  try {
    const order = req.body;
    await orders.create(order, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send("Order Succesfully Confirmed");
      }
    });
  } catch (error) {
    res.status(500).send("Something went wrong! Please try after sometime.");
  }
});

app.post("/rcreator/book/order", (req, res) => {
  try {
    const sea = req.body;
    const orderData = [];
    orders.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        for (let i = 0; i < data.length; i++) {
          if (i + 1 >= sea.min && i + 1 <= sea.max) {
            orderData.push(data[i]);
          }
        }
        res.status(201).send({ orderData: orderData, total: data.length });
      }
    });
  } catch (error) {
    res.status(500).send("Something went wrong! Please try after sometime.");
  }
});

app.get("/rcreator/book/papersize", (req, res) => {
  try {
    papersize.find((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  } catch (error) {
    res.status(500).send("Something went wrong! Please try after sometime.");
  }
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callended");
  });

  socket.on("calluser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("calluser", { signal: signalData, from, name });
  });

  socket.on("answercall", (data) => {
    io.to(data.to).emit("callaccepted", data.signal);
  });
});

server.listen(port, () => console.log("Listing post 9000"));
