import React from 'react';
import {Phone, Email} from '@material-ui/icons';
import avi from '../images/isaiah-mcclean-DrVJk1EaPSc-unsplash.jpg'

class ContactItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
    this.handleClick = this.handleClick.bind(this);
    this.animateCSS = this.animateCSS.bind(this);
  }
  animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = element;

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

  handleClick(e){
    let className = e.target;
    let offLeft =this.findPosition(className);
    this.props.find(this.state.name, offLeft);
  }
  findPosition(cell){
    return cell.offsetLeft;
  }

  render() {
    const styleForIcons = {
      width: "20px",
      height: "20px"
    };
    return (
    <div className="disc-item float-obj animate__animated" onClick={this.handleClick}>
          <div className="disc-header ">
            <img className="disc-image" src={avi} alt="Avi"/>
            <div className="disc-namer">Adeoye Laundry</div>
          </div>
          <div className="disc-body ">
          <Phone style={styleForIcons}></Phone>
            <div className="disc-info">+2348093456344</div>
          </div>
          <div className="disc-body ">
          <Email style={styleForIcons}></Email>
            <div className="disc-info">+2348093456344</div>
          </div>
          <button className="button-bottom small-b active">Hire</button>
    </div>);
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default ContactItem;
