import React from 'react';
import {Settings, Build} from '@material-ui/icons';
import '../css/settings.css'

class SettingsMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
        <div id="contain_set">
            <div className="button-circle float-obj">
            <Settings></Settings>
            </div>
            <div className="button-circle float-obj">
                <Build></Build>
            </div>
        </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default SettingsMenu;
