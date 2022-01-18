import React, { useState, useEffect } from "react";
import axios from "./Axios";
import { signup_validation, validationsubmit } from "../Utils/Validations";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Signupfunction = () => {
  const [submited, setSubmited] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  useEffect(() => {
    if (submited === true) {
      if (validateForm(validation)) {
        axios
          .post("/rcreator/newuser/create", {
            name: userData.name,
            email: userData.email,
            password: userData.password,
          })
          .then((response) =>
            toast.success(response.data, {
              position: toast.POSITION.BOTTOM_RIGHT,
            })
          )
          .catch((err) =>
            toast.warning("Something went wrong", {
              position: toast.POSITION.BOTTOM_RIGHT,
            })
          );
        setUserCreated(true);
      }
      setSubmited(false);
    }
  }, [validation, submited]);

  const inputGroupChangeHandler = (e) => {
    const { name, value } = e.target;
    const error = signup_validation(name, value, userData.password);

    if (error[name] === undefined) {
      error[name] = "";
    }

    setValidation((prevState) => ({
      ...prevState,
      [e.target.id]: error[name],
    }));

    setUserData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const createUser = (e) => {
    e.preventDefault();
    setValidation(validationsubmit(userData));
    setSubmited(true);
  };

  const validateForm = (error) => {
    let valid = true;
    Object.values(error).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  return {
    createUser,
    inputGroupChangeHandler,
    validation,
    userCreated,
  };
};

export default Signupfunction;
