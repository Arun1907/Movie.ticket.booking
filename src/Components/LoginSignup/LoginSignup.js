import React, { useState } from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";

const Header = ({ username }) => {
  return (
    <div className="header">
      <div className="text">{username}</div>
    </div>
  );
};

const LoginSignup = ({ setLogined, setUsername }) => {
  const [action, setAction] = useState("Login");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  console.log("formData", formData);
  const [errors, setErrors] = useState({});


  const validateForm = () => {
    let validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "Username Required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "E-mail Required";
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    if (action === "Login") {
      // Handle login logic
      console.log("Login with formData: ", formData);
      setLogined(true);
      setUsername(formData.username);
      navigate("/booking");
    }
  };

  return (
    <div className="container" onSubmit={handleSubmit}>
      <Header username={formData.username} />
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder="Name" name="username" />
        </div>

        <div className="input">
          <input type="email" placeholder="E-mail" name="email" />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={()=>{<Header/>
        ;navigate('/booking', { state: { username: formData.username } }) }}>Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;