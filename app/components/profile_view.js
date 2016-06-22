'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';
import SettingsList from 'react-native-settings-list';
import Button from 'react-native-button';

let API_ENDPOINT = 'http://localhost:8081/secured/ping';

class ProfileView extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.profileInfo }>
          <View style={ styles.bubble }>
            <Text>{ this.props.routes.scene.profile.name }</Text>
          </View>
          <View style={ styles.bubble }>
            <Text>21 years old</Text>
          </View>
          <View style={ styles.bubble }>
            <Text>5'7</Text>
          </View>
          <View style={ styles.bubble }>
            <Text>125 lbs</Text>
          </View>
        </View>
        <View style={ styles.profileSettings }>
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Edit Profile'
              onPress={() =>  Alert.alert('Edit Profile pressed')} />
            <SettingsList.Item title='Change Food Preferences'
                onPress={() =>  Alert.alert('Change Food Preferences pressed')} />
            <SettingsList.Item title='Saved Shopping Lists'
                onPress={() =>  Alert.alert('Saved Shopping Lists pressed')} />
          </SettingsList>
        </View>
        <Button style={ styles.logOutButton } onPress={() => Alert.alert('Log Out pressed')}>
          Log Out
        </Button>
      </View>
    );
  }

  _onCallApi() {
    fetch(API_ENDPOINT)
      .then((response) => response.text())
      .then((responseText) => {
        Alert.alert(
          'Request Successful',
          responseText,
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
    backgroundColor: '#26a65b',
  }
});

export default connect(({ routes }) => ({ routes }))(ProfileView);
