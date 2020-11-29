import React from 'react';
import { motion } from "framer-motion";
import {Phone, Email} from '@material-ui/icons';
import { Link, Route, Switch} from 'react-router-dom';
import About  from './about';
import Review  from './reviews';
import Contact from './contact';
import avi from '../images/isaiah-mcclean-DrVJk1EaPSc-unsplash.jpg';
import "../css/viewContact.css";

class ViewContact extends React.Component {
  constructor(props) {
    super(props);
    let id =  props.routerProp.match.params.id;
    this.state = {
      name: id,
      dept: 'Delivery',
      AnimationPos: props.AnimationPos
    };
  
    this.animateCSS = this.animateCSS.bind(this);
  }

  componentDidUpdate(){
    if (this.props.AnimationPos !== this.state.AnimationPos) {
      this.setState({
        AnimationPos: this.props.AnimationPos
      })
    }
  }

  animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

  render() {
    const transition = { duration: 0.06, ease: [0.6, 0.1, -0.05, 0.2] };
    const styleForIcons = {
      width: "20px",
      height: "20px"
    };
    return(
        <motion.div
        initial={{
                y:  "317%",
                 height: "150px",
                 paddingLeft: this.state.AnimationPos + "px",
                }} 
        animate={{
          y: 0,
          width: "100%",
          height: "auto",
          paddingLeft: "10px",
          transition: { delay: 0.09, ...transition },
        }} className="v_cont">
            <motion.div 
              initial={{
                  width: "133px",
                  height: "130px",
                }}
              animate={{
                width: "100%",
                height: "70%",
                transition: { delay: 0.09, ...transition },
              }}
              className={"v_container float-obj animate__animated "} data-tab={this.state.id}>
              <motion.div 
              initial={{
                y:  "0",
                flexDirection: "row"
              }}
              animate={{
                height: "auto",
                flexDirection: "column",
                transition: { delay: 0.09, ...transition },
              }} className="disc-header ">
                <motion.img 
                initial={{
                  y:  "0",
                }}
                animate={{
                  y:  "-30%",
                  width: "60px",
                  height: "63px",
                  transition: { delay: 0.21, ...transition },
                }} className="disc-image" src={avi} alt="Avi"/>
                  <motion.div 
                  initial={{
                    y:  "0",
                  }}
                  animate={{
                    fontSize: "16px",
                    y: "-20%",
                    transition: { delay: 0.19, ...transition },
                  }}
                  className="disc-namer">Adeoye Laundry</motion.div>
                </motion.div>

              <motion.div 
              initial={{
                y:  "0",
                height: "64px",
                flexDirection: "column"
              }}
              animate={{
                height: "32px",
                flexDirection: "row",
                transition: { delay: 0.19, ...transition },
              }}
              className="vC_contact">
                <div className="disc-body ">
                  <Phone style={styleForIcons}></Phone>
                  <div className="disc-info">+2348093456344</div>
                </div>
                <div className="disc-body ">
                  <Email style={styleForIcons}></Email>
                  <div className="disc-info">+2348093456344</div>
                </div>
              </motion.div>
              <motion.div 
              initial={{
                height: "0",
                opacity: 0
              }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: { delay: 0.6, ...transition },
              }} className="disc-menu-body">
                <motion.div className="disc-menu-tab">
                  <div  className="disc-menu-item active">
                    <Link className="text-link" to={"/profile/"+ this.state.name +"/about"}>About</Link>
                  </div>
                  <div  className="disc-menu-item">
                    <Link className="text-link" to={"/profile/"+ this.state.name +"/reviews"}>Reviews</Link>
                  </div>
                  <div  className="disc-menu-item">
                   <Link className="text-link" to={"/profile/"+ this.state.name +"/contact"}>Contact</Link>
                  </div>
                </motion.div>
                <Switch>
                  <Route exact path={"/profile/"+ this.state.name +"/"} 
                          render={routerProps => (
                              <About 
                                  {... this.props}
                                  routerProp= {routerProps}
                                  id={this.state.name}
                              />
                          )}
                    />
                    <Route exact path={"/profile/"+ this.state.name +"/reviews"} 
                          render={routerProps => (
                              <Review 
                                  {... this.props}
                                  routerProp= {routerProps}
                                  id={this.state.name}
                              />
                          )}
                    />
                    <Route exact path={"/profile/"+ this.state.name +"/contact"} 
                          render={routerProps => (
                              <Contact 
                                  {... this.props}
                                  routerProp= {routerProps}
                                  id={this.state.name}
                              />
                          )}
                    />
                </Switch>
              </motion.div>
            <div>
                <motion.button
                 initial={{
                  width: "70%",
                  padding: "2px 8px",
                  height: "20px",
                  fontSize: "12px"
                }}
                animate={{
                  y: 0,
                  width: "70%",
                  height: "auto",
                  padding: "10px 20px",
                  fontSize: "16px",
                  transition: { delay: 0.09, ...transition },
                }} className="button-bottom active">Hire
                </motion.button>
            </div>
            </motion.div>
        </motion.div>
    );
  } 

  componentDidMount() {
    //this.animateCSS(".v_container", 'headShake');
    this.props.handlePaging(this.state.dept)
  }
}

export default ViewContact;
