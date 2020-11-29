import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
    left: '0',
    right: '0'
  };
class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      center: 'someValue'
    };
  }


  render() {
    return (
        <Map
          google={this.props.google}
        zoom={14}
        style={mapStyles}
        fullscreenControl = {false}
        zoomControl={false}
        initialCenter={{ lat: -1.2884, lng: 36.8233} }
      />
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDlMyoLh8guzjOvSRaxW_I-zC3hBOvJLRk'
  })(MapContainer);
