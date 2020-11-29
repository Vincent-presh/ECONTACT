import React from "react";
import "animate.css";
import "../css/discovery.css";
import ContactItem from "./contactItem";

class Discover extends React.Component {
  constructor(props) {
    super();
    let id = props.routerProp.match.params.id;
    this.state = {
      id: id,
      count: 0,
    };
    this.item = [
      {
        name: "Erick Solutions",
        index: 0,
        icon: 0,
      },
      {
        name: "Erick",
        index: 0,
        icon: 0,
      },
    ];
    this.find = this.find.bind(this);
  }
  find(id, offLeft) {
    this.props.setAnimationPos(offLeft);
    this.props.history.push("/profile/" + id);
  }

  componentDidMount() {
    this.props.handlePaging(this.state.id);
  }

  componentWillUnmount() {}

  render() {
    const container = (
      <div id="disc-contain" className="animate__animated animate__headShake">
        {this.item.map((item, index) => (
          <ContactItem
            key={index}
            name={item.name}
            icon={item.icon}
            find={this.find}
            active_tab={this.state.active_tab}
          ></ContactItem>
        ))}
      </div>
    );

    return container;
  }
}

export default Discover;
