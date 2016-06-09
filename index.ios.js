'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import WelcomeView from './app/welcome-view';
import ProfileView from './app/profile-view';

export default class MacroManagement extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='welcome' component={WelcomeView} title='Welcome' initial={true} />
          <Scene key='profile' component={ProfileView} title='Profile' />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('MacroManagement', () => MacroManagement);
