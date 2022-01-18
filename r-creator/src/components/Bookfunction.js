import React, { useEffect, useState } from "react";
import axios from "./Axios";
import Common from "./Common";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { store } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { bookorder_onsubmit } from "../Utils/Validations";
toast.configure();

function Bookfunction() {
  const navigate = useNavigate();
  var [bookCount, isBookCount] = useState(1);
  var [paperCount, isPaperCount] = useState(20);
  const [paperSize, setPaperSize] = useState("A4");
  const [frontImage, setFrontImage] = useState("");
  const [backImage, setBackImage] = useState("");
  const [frontImageURL, setFrontImageURL] = useState("");
  const [backImageURL, setBackImageURL] = useState("");
  const [frontDone, setfrontDone] = useState(false);
  const [backDone, setbackDone] = useState(false);
  const [loader, setLoader] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sizeData, setSizeData] = useState([]);
  const [dimension, setDimension] = useState("8.5 x 10.5 inches");
  const [buy, setBuy] = useState(false);
  const [imageData, setImageData] = useState({
    frontImage: "",
    backImage: "",
  });
  const [validation, setValidation] = useState({
    frontImage: "",
    backImage: "",
  });

  function plus(type) {
    if (type === "book") {
      isBookCount(bookCount + 1);
    } else {
      isPaperCount(paperCount + 1);
    }
  }

  function minus(type) {
    if (type === "book") {
      if (bookCount > 1) {
        isBookCount(bookCount - 1);
      }
    } else {
      if (paperCount > 20) {
        isPaperCount(paperCount - 1);
      }
    }
  }

  const inputChangedHandler = (event) => {
    const count = parseInt(event.target.value);
    if (event.target.id === "booknumber") {
      if (event.target.value != "" && event.target.value != null) {
        isBookCount(count);
      }
    } else {
      if (
        event.target.value != "" &&
        event.target.value != null &&
        event.target.value >= 20
      ) {
        isPaperCount(count);
      }
    }
  };

  const imagePreview = (e, side) => {
    const image = e.target.files[0];
    setImageData((res) => ({
      ...res,
      [e.target.id]: e.target.files[0].name,
    }));

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
    }

    if (side === "Front") {
      setFrontImage(image);
    } else {
      setBackImage(image);
    }
  };

  const selectHandle = (event) => {
    setPaperSize(event.target.value);
    for (let i = 0; i < sizeData.length; i++) {
      if (sizeData[i].name === event.target.value) {
        setDimension(sizeData[i].dimension);
      }
    }
  };

  function imageUpload(image, side) {
    if (image != "") {
      const storageRef = ref(store, "images/" + image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => console.log(error.code),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            if (side === "front") {
              setFrontImageURL(downloadURL);
              setfrontDone(true);
            } else {
              setBackImageURL(downloadURL);
              setbackDone(true);
            }
          });
        }
      );
    }
  }

  function addtoCart(buyy) {
    setValidation(bookorder_onsubmit(imageData));
    setBuy(buyy);
    setSubmit(true);
  }

  useEffect(() => {
    axios
      .get("/rcreator/book/papersize")
      .then((response) => setSizeData(response.data))
      .catch((err) =>
        toast.warning("Something went wrong", {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      );
  }, []);

  useEffect(() => {
    if (submit) {
      if (validateForm(validation)) {
        setLoader(true);
        imageUpload(frontImage, "front");
        imageUpload(backImage, "back");
      }
      setSubmit(false);
    }
  }, [submit]);

  useEffect(() => {
    if (frontDone && backDone) {
      if (buy) {
        axios
          .post("/rcreator/book/addcart", {
            papersize: paperSize,
            papernumber: paperCount,
            booknumber: bookCount,
            frontimg: frontImageURL,
            backimg: backImageURL,
          })
          .then((response) => {
            navigate("/confirmorder", { state: response.data.id });
          })
          .catch((err) =>
            toast.warning("Something went wrong", {
              position: toast.POSITION.BOTTOM_RIGHT,
            })
          );
        setLoader(false);
      } else {
        axios
          .post("/rcreator/book/addcart", {
            papersize: paperSize,
            papernumber: paperCount,
            booknumber: bookCount,
            frontimg: frontImageURL,
            backimg: backImageURL,
          })
          .then((response) => {
            window.location.reload(false);
            toast.success(response.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          })
          .catch((err) =>
            toast.warning("Something went wrong", {
              position: toast.POSITION.BOTTOM_RIGHT,
            })
          );
        setLoader(false);
      }
    }
  }, [frontDone, backDone]);

  const validateForm = (error) => {
    let valid = true;
    Object.values(error).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  return {
    bookCount,
    paperCount,
    frontImage,
    backImage,
    sizeData,
    loader,
    dimension,
    validation,
    plus,
    minus,
    inputChangedHandler,
    imagePreview,
    selectHandle,
    addtoCart,
  };
}

export default Bookfunction;
