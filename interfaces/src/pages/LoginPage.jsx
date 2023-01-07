import React from "react";
import { Link } from "react-router-dom";
import '../styles/LoginPage.css';
import loginIMG from '../assets/login-img.svg';
import { useState } from "react";
import { useEffect } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remindMe, setRemindMe] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const handleIsDisable = () => {
    setTimeout(() => {
      if (username === "desafiosharenergy" && password === "sh@r3n3rgy") {
        setIsDisable(false);
      }
    }, 500);
  }

  const handleUsername = ({ target: { value } }) => {
    setUsername(value);
    handleIsDisable();
  }

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
    handleIsDisable();
  }

  const setRemind = (value) => {
    localStorage.setItem("remindMe", value);
  }

  const onCheckboxClick = () => {
    setRemind(!remindMe);
    setRemindMe(!remindMe)
  }

  useEffect(() => {
    const remind = localStorage.getItem("remindMe");

    if (remind === true) {
      setUsername("desafiosharenergy");
      setPassword("sh@r3n3rgy");
      setRemindMe(true);
      setIsDisable(false);
    }
  }, []);

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <h1 className="login-form-title">Bem vindo(a)!!!</h1>

            <span className="login-form-title">
              <img src={ loginIMG } alt="Login imagem" />
            </span>

            <div className="wrap-input">
              <input
                className="input"
                type="username"
                name="username"
                value={ username }
                onChange={ handleUsername }
              />
              <span className="focus-input" data-placeholder="Username"></span>
            </div>

            <div className="wrap-input">
              <input
                className="input"
                type="password"
                name="password"
                value={ password }
                onChange={ handlePassword }
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <Link>
              <div className="container-login-form-btn">
                <button
                  className="login-form-btn"
                  disabled={ isDisable }
                >Login</button>
              </div>
            </Link>

            <div className="remember-me">
              <input
                type="checkbox"
                value={ remindMe }
                onClick={ onCheckboxClick }
                name="remember-me"
                id="remember-me"
              />
              <span className="remember-me-txt">Manter-me conectado.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
