'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';
import SettingsList from 'react-native-settings-list';
import Button from 'react-native-button';

class ProfileView extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  // TODO: make the profile view a smart component handling both view and edit profile screens
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.profileInfo }>
          <View style={ styles.bubble }>
            <Text>Aldo Gonzalez</Text>
          </View>
          <View style={ styles.bubble }>
            <Text>21 years old</Text>
          </View>

          <View style={ styles.bubble }>
            <Text>5</Text>
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
};

const imageMap = {
  "badge": require('../img/badge.png'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#26a65b',
  },
  profileInfo: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 75,
    overflow: 'hidden',
    backgroundColor: '#e9e9e9',
  },
  profileSettings: {
    flex: 4,
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden'
  },
  bubble: {
    flex: 4
  }
});

export default connect(({ routes }) => ({ routes }))(ProfileView);
