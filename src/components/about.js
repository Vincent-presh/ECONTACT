import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
    };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default About;
