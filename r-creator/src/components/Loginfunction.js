import React, { useState, useEffect } from "react";
import axios from "./Axios";
import { useNavigate } from "react-router-dom";
import { login_validate, login_validate_onsubmit } from "../Utils/Validations";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Loginfunction = () => {
  const navigate = useNavigate();
  const [submited, setSubmited] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (submited === true) {
      if (validateForm(validation)) {
        axios
          .post("/rcreator/login", {
            email: userData.email,
            password: userData.password,
          })
          .then((response) => {
            if (!response.data) {
              toast.success("Username or Password is invalid", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
            } else {
              toast.success(response.data["message"], {
                position: toast.POSITION.BOTTOM_RIGHT,
              });
              localStorage.setItem("token", response.data["token"]);
              navigate("/welcome");
            }
          })
          .catch((err) => {
            toast.error(err.response.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          });
      }
      setSubmited(false);
    }
  }, [submited]);

  const inputGroupChangeHandler = (e) => {
    const { name, value } = e.target;
    const error = login_validate(name, value);

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

  const login = (e) => {
    e.preventDefault();
    setValidation(login_validate_onsubmit(userData));
    setSubmited(true);
  };

  const validateForm = (error) => {
    let valid = true;
    Object.values(error).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  return {
    login,
    inputGroupChangeHandler,
    validation,
  };
};

export default Loginfunction;
