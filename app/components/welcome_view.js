'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Auth0Lock from 'react-native-lock';
import Config from 'react-native-config';

let credentials = {
  clientId: Config.CLIENT_ID,
  domain: Config.DOMAIN
};
let lock = new Auth0Lock(credentials, {
  integrations: {
    facebook: {}
  }
});

class WelcomeView extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.messageBox }>
          <Image
            style={ styles.badge }
            source={ imageMap['badge'] }
          />
          <Text style={ styles.title }>Auth0 Example</Text>
          <Text style={ styles.subtitle }>Identity made simple for Developers</Text>
        </View>
        <TouchableHighlight
          style={ styles.signInButton }
          underlayColor='#949494'
          onPress={ this._onLogin }>
          <Text>Log In</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onLogin() {
    lock.show({
      closable: true,
    }, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      Actions.tabbar({
        profile: profile,
        token: token
      });
    });
  }
};

const imageMap = {
  "badge": require('../img/badge.png'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#15204C',
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'center',
    height: 169,
    width: 151,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 8,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 4,
    color: '#FFFFFF',
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(({ routes }) => ({ routes }))(WelcomeView);
