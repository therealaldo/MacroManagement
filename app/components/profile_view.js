'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';

let API_ENDPOINT = 'http://localhost:8081/secured/ping';

class ProfileView extends React.Component {
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
          <Text style={ styles.title }>Welcome { this.props.profile.name }</Text>
        </View>
        <TouchableHighlight
          style={ styles.callApiButton }
          underlayColor='#949494'
          onPress={ this._onCallApi }>
          <Text>Call API</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onCallApi() {
    fetch(API_ENDPOINT)
      .then((response) => response.text())
      .then((responseText) => {
        Alert.alert(
          'Request Successful',
          'We got the secured data successfully',
          [
            {text: 'OK'},
          ]
        )
      })
      .catch((error) => {
        Alert.alert(
          'Request Failed',
          'Please download the API seed so that you can call it',
          [
            {text: 'OK'},
          ]
        )
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
    backgroundColor: '#15204C',
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'center',
    height: 110,
    width: 102,
    marginBottom: 80,
  },
  avatar: {
    alignSelf: 'center',
    height: 128,
    width: 240,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
    color: '#FFFFFF',
  },
  callApiButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(({ routes }) => ({ routes }))(ProfileView);
