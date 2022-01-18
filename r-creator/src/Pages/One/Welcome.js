import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      var user = jwt(localStorage.getItem("token"));
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        setUser(user.name);
      }
    } else {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, []);

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="d-flex items-center flex-column justify-center h-screen text-3xl">
      <p>Welcome {user}</p>
      <button onClick={logout} className="btn-danger px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}

export default Welcome;
