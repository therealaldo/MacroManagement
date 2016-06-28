'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import SettingsList from 'react-native-settings-list';

class SettingsView extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  genRows() {
    switch(this.props.title) {
      case 'Settings':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Profile' onPress={ Actions.profileSettings } />
            <SettingsList.Item title='Sharing & Privacy' onPress={ Actions.privacySettings } />
            <SettingsList.Item title='Meal Plan' onPress={ Actions.mealSettings } />
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Notifications' onPress={ Actions.notificationSettings } />
            <SettingsList.Item title='Language & Region' onPress={ Actions.regionSettings } />
            <SettingsList.Item title='Reset' onPress={ Actions.resetSettings } />
          </SettingsList>
        );
      case 'Profile':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Edit Profile'
              onPress={() => Alert.alert('Edit Profile pressed')} />
          </SettingsList>
        );
      case 'Sharing & Privacy':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='View Terms of Service'
              onPress={() => Alert.alert('TOS pressed')} />
            <SettingsList.Item title='View Privacy Policy'
              onPress={() => Alert.alert('Privacy Policy pressed')} />
          </SettingsList>
        );
      case 'Meal Plan':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Edit Food Preferences'
              onPress={() => Alert.alert('Edit Food Preferences pressed')} />
            <SettingsList.Item title='Show Nutrition Facts'
              onPress={() => Alert.alert('Show Nutrition Facts pressed')} />
          </SettingsList>
        );
      case 'Notifications':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Meal Plan' onPress={() => Alert.alert('Meal Plan pressed')} />
            <SettingsList.Item title='Cookbook' onPress={() => Alert.alert('Cookbook pressed')} />
            <SettingsList.Item title='Recommendations'
              onPress={() => Alert.alert('Recommendations pressed')} />
            <SettingsList.Item title='Do Not Disturb'
              onPress={() => Alert.alert('Do Not Disturb pressed')} />
          </SettingsList>
        );
      case 'Language & Region':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Change Language'
              onPress={() => Alert.alert('Change Language pressed')} />
            <SettingsList.Item title='Change Region'
              onPress={() => Alert.alert('Change Region pressed')} />
          </SettingsList>
        );
      case 'Reset':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Reset All Settings'
              onPress={() => Alert.alert('Reset All Settings pressed')} />
            <SettingsList.Item title='Reset Food Preferences'
              onPress={() => Alert.alert('Reset Food Preferences pressed')} />
            <SettingsList.Item title='Reset Notifications'
              onPress={() => Alert.alert('Reset Notifications pressed')} />
          </SettingsList>
        );
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.settingsContainer }>
          { this.genRows() }
        </View>
        <Button style={ styles.logOutButton } onPress={() => Alert.alert('Log Out pressed')}>
          Log Out
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#26a65b',
  },
  settingsContainer: {
    flex: 1,
    marginTop: 50,
  }
});;

export default connect(({ routes }) => ({ routes }))(SettingsView);
