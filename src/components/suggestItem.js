import React from "react";

class SuggestItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      icon: props.icon,
      active_tab: props.active_tab,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const active_tab = e.target.tab;
    this.setState({
      active_tab: active_tab,
    });
    this.props.find(this.props.link, this.state.name);
  }
  render() {
    const activeClass = "active";
    const item = (
      <div
        data-tab={this.state.name}
        className={`suggest-item float-obj  ${
          this.state.active_tab === this.props.name ? activeClass : ""
        }`}
        onClick={this.handleClick}
      >
        <div>{this.state.icon}</div>
        <div id="font-wrapper"> {this.state.name} </div>
      </div>
    );

    return item;
  }

  componentDidMount() {}
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

export default SuggestItem;
