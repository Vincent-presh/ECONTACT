import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      phone: "",
      password: "",
      segment: "1",
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
    const { fullname, email, phone, password, segment } = this.state;
    axios
      .post(
        "http://localhost:9000/register",
        {
          user: {
            name: fullname,
            email: email,
            phone: phone,
            password: password,
            segment: segment,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.data.logged_in) {
          this.props.handleLogin(response.data.data, true);
          this.props.history.push("/");
          console.log("You have successfully registered");
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    this.setState({
      fullname: "",
      email: "",
      phone: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="register">
        <form onSubmit={this.displayLogin}>
          <h2>Register</h2>

          <div className="name">
            <input
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={this.state.fullname}
              onChange={this.update}
            />
          </div>

          <div className="email">
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.update}
            />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.update}
            />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password1"
            />
          </div>
          <div className="password">
            <label htmlFor="segment">Register as a:</label>

            <select name="segment" id="segments" onChange={this.update}>
              <option value="1">Agent</option>
              <option value="2">Customer</option>
            </select>
          </div>
          <input type="submit" value="Register" />
        </form>

        <Link to="/">Login Here</Link>
      </div>
    );
  }
}

export default Register;
