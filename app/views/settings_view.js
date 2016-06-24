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

  // TODO: write the rest of the settings lists based on the action.key being called
  genRows() {
    if(this.props.title === 'Settings') {
      return (
        <SettingsList.Item title='Profile' onPress={() => Alert.alert('Profile pressed')} />
        <SettingsList.Item title='Sharing & Privacy'
          onPress={() => Alert.alert('Sharing & Privacy pressed')} />
        <SettingsList.Item title='Meal Plan' onPress={() => Alert.alert('Meal Plan pressed')} />
        <SettingsList.Header headerText='' />
        <SettingsList.Item title='Notifications'
          onPress={() => Alert.alert('Notifications pressed')} />
        <SettingsList.Item title='Language & Region'
          onPress={() => Alert.alert('Language & Region pressed')} />
        <SettingsList.Item title='Reset' onPress={() => Alert.alert('Reset pressed')} />
      )
    }
    if(this.props.title === 'Settings') {
      return (
        <SettingsList.Item title='Profile' onPress={() => Alert.alert('Profile pressed')} />
        <SettingsList.Item title='Sharing & Privacy'
          onPress={() => Alert.alert('Sharing & Privacy pressed')} />
        <SettingsList.Item title='Meal Plan' onPress={() => Alert.alert('Meal Plan pressed')} />
        <SettingsList.Header headerText='' />
        <SettingsList.Item title='Notifications'
          onPress={() => Alert.alert('Notifications pressed')} />
        <SettingsList.Item title='Language & Region'
          onPress={() => Alert.alert('Language & Region pressed')} />
        <SettingsList.Item title='Reset' onPress={() => Alert.alert('Reset pressed')} />
      )
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.settingsContainer }>
          <SettingsList>
            <SettingsList.Header headerText='' />
              { this.genRows() }
          </SettingsList>
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
