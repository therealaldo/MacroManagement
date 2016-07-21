'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Alert, InteractionManager } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/settings/action_creators';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import SettingsList from 'react-native-settings-list';

class SettingsView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    toggleRecommendations: PropTypes.func.isRequired,
    toggleNutritionFacts: PropTypes.func.isRequired,
    toggleNotifications: PropTypes.func.isRequired,
    resetAllSettings: PropTypes.func.isRequired,
  };

  generateSettingsList() {
    switch(this.props.routes.scene.name) {
      case 'sharePrivacySettings':
        return (
          <View style={ styles.settingsContainer }>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='Terms of Service' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={() => Alert.alert('TOS pressed')} />
                <SettingsList.Item title='Privacy Policy' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={() => Alert.alert('Privacy Policy pressed')} />
              </SettingsList>
            </View>
          </View>
        );
      case 'mealSettings':
        return (
          <View style={ styles.settingsContainer }>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='Edit Food Preferences'
                  titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={() => Alert.alert('Edit Food Preferences pressed')} />
                <SettingsList.Item title='Show Nutrition Facts'
                  hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}}
                  switchState={ this.props.settings.nutritionFacts }
                  switchOnValueChange={ this.props.toggleNutritionFacts } />
              </SettingsList>
            </View>
          </View>
        );
      case 'notificationSettings':
        return (
          <View style={ styles.settingsContainer }>
            <View scrollEnabled={ false } style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='Enable Recommendations'
                  hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}}
                  switchState={ this.props.settings.recommendations }
                  switchOnValueChange={ this.props.toggleRecommendations } />
                <SettingsList.Item title='Do Not Disturb'
                  hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}}
                  switchState={ this.props.settings.notifications }
                  switchOnValueChange={ this.props.toggleNotifications } />
              </SettingsList>
            </View>
          </View>
        );
      case 'langRegionSettings':
        return (
          <View style={ styles.settingsContainer }>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='Language' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={ Actions.languageSettings } />
                <SettingsList.Item title='Region' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={ Actions.regionSettings } />
              </SettingsList>
            </View>
          </View>
        );
      case 'languageSettings':
        return (
          <View style={ styles.settingsContainer }>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='English' hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}} />
              </SettingsList>
            </View>
          </View>
        );
      case 'regionSettings':
        return (
          <View style={ styles.settingsContainer }>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='United States' hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}} />
              </SettingsList>
            </View>
          </View>
        );
      case 'resetSettings':
        return (
          <View style={ styles.settingsContainer }>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='Reset All Settings' hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={() => Alert.alert(
                    'Reset All Settings',
                    'Are you sure you want to reset all of your settings?',
                    [
                      {text: 'Cancel'},
                      {text: 'Reset', onPress: () => this.props.resetAllSettings()},
                    ]
                  )} />
              </SettingsList>
            </View>
          </View>
        );
      default:
        return (
            <View style={ styles.settingsContainer }>
              <View style={ styles.listContainer }>
                <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                  <SettingsList.Item title='Sharing & Privacy' titleStyle={{fontFamily: 'OpenSans'}}
                    onPress={ Actions.sharePrivacySettings } />
                  <SettingsList.Item title='Meal Plan' titleStyle={{fontFamily: 'OpenSans'}}
                    onPress={ Actions.mealSettings } />
                </SettingsList>
              </View>
              <View style={ styles.listContainer }>
                <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                  <SettingsList.Item title='Notifications' titleStyle={{fontFamily: 'OpenSans'}}
                    onPress={ Actions.notificationSettings } />
                  <SettingsList.Item title='Language & Region' titleStyle={{fontFamily: 'OpenSans'}}
                    onPress={ Actions.langRegionSettings } />
                  <SettingsList.Item title='Reset' titleStyle={{fontFamily: 'OpenSans'}}
                    onPress={ Actions.resetSettings } />
                </SettingsList>
              </View>
              <Button containerStyle={ styles.logOutButtonContainer }
                style={ styles.logOutButtonText }
                onPress={() => Alert.alert('Log Out pressed')}>
                Log Out
              </Button>
            </View>
        );
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.generateSettingsList() }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26a65b',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
  },
  settingsContainer: {
    flex: 1,
    marginTop: 80,
    overflow: 'hidden',
  },
  listContainer: {
    borderStyle: 'solid',
    borderRadius: 7,
    overflow: 'hidden',
    marginBottom: 10,
  },
  logOutButtonContainer: {
    backgroundColor: '#c62733',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  logOutButtonText: {
    color: '#e9e9e9',
  }
});

function mapStateToProps(state) {
  return {
    routes: state.routes,
    settings: state.settings,
    users: state.users
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);
