'use strict';

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

export default App extends Component {
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
