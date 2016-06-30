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
    switch(this.props.routes.scene.name) {
      case 'profileSettings':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Edit Profile'
              onPress={() => Alert.alert('Edit Profile pressed')} />
          </SettingsList>
        );
      case 'sharePrivacySettings':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Terms of Service'
              onPress={() => Alert.alert('TOS pressed')} />
            <SettingsList.Item title='Privacy Policy'
              onPress={() => Alert.alert('Privacy Policy pressed')} />
          </SettingsList>
        );
      case 'mealSettings':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Edit Food Preferences'
              onPress={() => Alert.alert('Edit Food Preferences pressed')} />
            <SettingsList.Item title='Nutrition Facts'
              onPress={() => Alert.alert('Nutrition Facts pressed')} />
          </SettingsList>
        );
      case 'notificationSettings':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Meal Plan' onPress={() => Alert.alert('Meal Plan pressed')} />
            <SettingsList.Item title='Cookbook' onPress={() => Alert.alert('Cookbook pressed')} />
            <SettingsList.Item title='Recommendations'
              onPress={() => Alert.alert('Recommendations pressed')} />
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Do Not Disturb' hasSwitch={ true } hasNavArrow={ false } />
          </SettingsList>
        );
      case 'langRegionSettings':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Language'
              onPress={ Actions.languageSettings } />
            <SettingsList.Item title='Region'
              onPress={ Actions.regionSettings } />
          </SettingsList>
        );
      case 'languageSettings':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='English' hasNavArrow={ false } />
          </SettingsList>
        );
      case 'regionSettings':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='United States' hasNavArrow={ false } />
          </SettingsList>
        );
      case 'resetSettings':
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Reset Food Preferences' hasNavArrow={ false }
              onPress={() => Alert.alert(
                'Reset Food Preferences',
                'Are you sure you want to reset your food preferences?',
                [
                  {text: 'Cancel'},
                  {text: 'Reset', onPress: () => console.log('You just reset your food prefereces!')},
                ]
              )} />
            <SettingsList.Item title='Reset Notifications' hasNavArrow={ false }
              onPress={() => Alert.alert(
                'Reset Notifications',
                'Are you sure you want to reset your notifications?',
                [
                  {text: 'Cancel'},
                  {text: 'Reset', onPress: () => console.log('You just reset your notifications!')},
                ]
              )} />
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Reset All Settings' hasNavArrow={ false }
              onPress={() => Alert.alert(
                'Reset All Settings',
                'Are you sure you want to reset all of your settings?',
                [
                  {text: 'Cancel'},
                  {text: 'Reset', onPress: () => console.log('You just reset all of your settings, HUGE deal!')},
                ]
              )} />
          </SettingsList>
        );
      default:
        return (
          <SettingsList>
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Profile' onPress={ Actions.profileSettings } />
            <SettingsList.Item title='Sharing & Privacy' onPress={ Actions.sharePrivacySettings } />
            <SettingsList.Item title='Meal Plan' onPress={ Actions.mealSettings } />
            <SettingsList.Header headerText='' />
            <SettingsList.Item title='Notifications' onPress={ Actions.notificationSettings } />
            <SettingsList.Item title='Language & Region' onPress={ Actions.langRegionSettings } />
            <SettingsList.Item title='Reset' onPress={ Actions.resetSettings } />
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
