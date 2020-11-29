import React from "react";
import "../css/home.css";
import {
  Search,
  HomeOutlined,
  ShoppingCartOutlined,
  PersonOutline,
  NotificationsNoneRounded,
} from "@material-ui/icons";
import SuggestItem from "./suggestItem";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_tab: "Home",
    };
    this.find = this.find.bind(this);
    this.item = [
      {
        name: "Home",
        link: "/",
        index: 0,
        icon: <HomeOutlined></HomeOutlined>,
      },
      {
        name: "Delivery",
        link: "/discover/delivery",
        index: 1,
        icon: <ShoppingCartOutlined></ShoppingCartOutlined>,
      },
      {
        name: "Notifications",
        link: "/notifications",
        index: 2,
        icon: <NotificationsNoneRounded></NotificationsNoneRounded>,
      },
    ];
  }

  find(link, what) {
    this.props.move(what);
    0;
    this.props.history.push(link);
  }

  render() {
    return (
      <div id="header">
        <div className="search-bar float-obj">
          <div className="search-icon">
            <Search />
          </div>
          <div className="input-cover">
            <input className="home" placeholder="Search"></input>
          </div>
          <div id="avi_p">
            <PersonOutline />
          </div>
        </div>
        <div className="suggest-bar">
          {this.item.map((item) => (
            <SuggestItem
              key={item.index}
              name={item.name}
              link={item.link}
              icon={item.icon}
              find={this.find}
              active_tab={this.state.active_tab}
            ></SuggestItem>
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      active_tab: this.props.active_tab,
    });
  }

  componentDidUpdate() {
    if (this.props.active_tab !== this.state.active_tab) {
      this.setActiveTab(this.props.active_tab);
    }
  }

  setActiveTab(active_tab) {
    this.setState({
      active_tab: active_tab,
    });
  }
}

export default Header;
