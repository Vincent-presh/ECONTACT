import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MapContainer from "./components/Map";
import Header from "./components/Header";
import Discover from "./components/Discover";
import SettingsMenu from "./components/settings_menu";
import ViewContact from "./components/viewContact";
import { AnimatePresence } from "framer-motion";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_tab: props.active_tab,
      animationPos: 10,
      user: {},
    };
    this.setAnimationPos = this.setAnimationPos.bind(this);
    this.find = this.find.bind(this);
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  componentDidMount() {
    this.checkLogin = this.props.getCookie(this.props.cookie_name);
    if (this.checkLogin == null) {
      this.props.history.push("../login");
    }
  }
  componentWillUnmount() {}
  componentDidUpdate() {
    if (this.props.active_tab !== this.state.active_tab) {
      this.setActiveTab(this.props.active_tab);
    }
  }

  setAnimationPos(offLeft) {
    this.setState({
      animationPos: offLeft,
    });
  }

  setActiveTab(active_tab) {
    this.setState({
      active_tab: active_tab,
    });
  }

  find(what) {
    this.props.handlePaging(what);
  }

  render() {
    return (
      <div
        className="MapperC"
        style={{
          position: "relative",
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <div>
          <Route
            path={"/"}
            render={(routerProps) => <MapContainer></MapContainer>}
          />
          <Route
            path={"/"}
            render={(routerProps) => (
              <Header
                {...this.props}
                key={"header"}
                move={this.find}
                active_tab={this.state.active_tab}
              ></Header>
            )}
          />
        </div>
        <SettingsMenu></SettingsMenu>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Switch>
            <Route
              exact
              path={"/discover/:id"}
              render={(routerProps) => (
                <Discover
                  key={1}
                  {...this.props}
                  routerProp={routerProps}
                  handlePaging={this.props.handlePaging}
                  setAnimationPos={this.setAnimationPos}
                />
              )}
            />
            <Route
              path={"/profile/:id"}
              render={(routerProps) => (
                <ViewContact
                  key={2}
                  routerProp={routerProps}
                  handlePaging={this.props.handlePaging}
                  AnimationPos={this.state.animationPos}
                />
              )}
            />
          </Switch>
        </AnimatePresence>
      </div>
    );
  }
}

export default Home;
