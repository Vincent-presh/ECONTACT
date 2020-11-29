import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookie_name: "loggedin",
      isLoggedIn: "NOT_LOGGED",
      active_tab: "Home",
      ifNew: false,
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.setCookie = this.setCookie.bind(this);
    this.getCookie = this.getCookie.bind(this);
    this.handlePaging = this.handlePaging.bind(this);
  }

  componentDidMount() {
    this.checkLogin = this.getCookie("loogedin");
  }

  handlePaging(page) {
    this.setState({
      active_tab: page,
    });
    console.log(page);
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }

  handleLogin(data, ifNew) {
    this.setCookie(this.state.cookie_name, data.id, 1);
    console.log("You are logged in");
    this.setState({
      loggedInStatus: "LOGGED_IN",
      ifNew: ifNew,
      user: data,
    });
  }
  getCookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return value != null ? unescape(value[1]) : null;
  }

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route
              exact
              path={"/login"}
              render={(props) => (
                <Login
                  {...props}
                  cookie_name={this.state.cookie_name}
                  setCookie={this.setCookie}
                  getCookie={this.getCookie}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />

            <Route
              exact
              path={"/register"}
              render={(props) => (
                <Register
                  {...props}
                  cookie_name={this.state.cookie_name}
                  setCookie={this.setCookie}
                  getCookie={this.getCookie}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  key={"Home"}
                  cookie_name={this.state.cookie_name}
                  setCookie={this.setCookie}
                  getCookie={this.getCookie}
                  handleLogout={this.handleLogout}
                  handlePaging={this.handlePaging}
                  loggedInStatus={this.state.isLoggedIn}
                  active_tab={this.state.active_tab}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
