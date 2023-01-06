import React from "react";
import { Link } from "react-router-dom";
import '../styles/LoginPage.css';
import loginIMG from '../assets/login-img.svg';

class LoginPage extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.onCheckboxClick = this.onCheckboxClick.bind(this);

    this.state = {
      username: "",
      password: "",
      remindMe: false,
      isDisable: true,
    }
  }

  onChange({ target: { name, value } }) {
    this.setState(
      { [name]: value },
    );

    const { username, password } = this.state;

    if (username === "desafiosharenergy" && password === "sh@r3n3rgy") {
      this.setState({ isDisable: false });
    }
  }

  setRemind(value) {
    localStorage.setItem("remindMe", value);
  }

  onCheckboxClick() {
    const { remindMe } = this.state;

    this.setRemind(!remindMe);

    this.setState({ remindMe: !remindMe });
  }

  componentDidMount() {
    const remind = localStorage.getItem("remindMe");

    if (remind === true) {
      this.setState({
        username: "desafiosharenergy",
        password: "sh@r3n3rgy",
        remindMe: true,
        isDisable: false,
      });
    }
  }

  render() {
    const { username, password, remindMe, isDisable } = this.state;

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
                  onChange={ this.onChange }
                />
                <span className="focus-input" data-placeholder="Username"></span>
              </div>

              <div className="wrap-input">
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={ password }
                  onChange={ this.onChange }
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
                  onClick={ this.onCheckboxClick }
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
  }
};

export default LoginPage;
