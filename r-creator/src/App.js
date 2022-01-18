import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/One/Login";
import SignUp from "./Pages/One/SignUp";
import Welcome from "./Pages/One/Welcome";
import Orderbook from "./Pages/Two/Orderbook";
import About from "./Pages/About";
import TermsCondition from "./Pages/TermsCondition";
import Privacy from "./Pages/Privacy";
import Cart from "./Pages/Two/Cart";
import ConfirmOrder from "./Pages/Two/ConfirmOrder";
import Orders from "./Pages/Two/Orders";
import Videochat from "./Pages/Three/Videochat";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/termsandcondition" element={<TermsCondition />} />
          <Route path="/confirmorder" element={<ConfirmOrder />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/orderbook" element={<Orderbook />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/vchat" element={<Videochat />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
