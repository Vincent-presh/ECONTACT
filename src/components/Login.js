import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  displayLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post(
        "http://localhost:9000/loginauth",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.data.logged_in) {
          this.props.handleLogin(response.data.data, "no");
          this.setState({
            email: "",
            password: "",
          });
          this.props.history.push("/");
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.displayLogin}>
          <h2>Login</h2>
          <div className="username">
            <input
              type="text"
              placeholder="Username..."
              value={this.state.email}
              onChange={this.update}
              name="email"
            />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Password..."
              value={this.state.password}
              onChange={this.update}
              name="password"
            />
          </div>

          <input type="submit" value="Login" />
        </form>

        <Link to="/register">Create an account</Link>
      </div>
    );
  }
}

export default Login;
