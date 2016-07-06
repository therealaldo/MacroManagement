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

  generateSettingsList() {
    switch(this.props.routes.scene.name) {
      case 'profileSettings':
        return (
          <View style={ styles.settingsContainer }>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='Edit Profile' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={() => Alert.alert('Edit Profile pressed')} />
              </SettingsList>
            </View>
          </View>
        );
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
                <SettingsList.Item title='Edit Food Preferences' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={() => Alert.alert('Edit Food Preferences pressed')} />
                <SettingsList.Item title='Nutrition Facts' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={() => Alert.alert('Nutrition Facts pressed')} />
              </SettingsList>
            </View>
          </View>
        );
      case 'notificationSettings':
        return (
          <View style={ styles.settingsContainer }>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='Meal Plan' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={ Actions.notificationMealPlanSettings } />
                <SettingsList.Item title='Cookbook' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={ Actions.notificationCookbookSettings } />
                <SettingsList.Item title='Recommendations' titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={ Actions.notificationRecommendSettings } />
              </SettingsList>
            </View>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='Do Not Disturb' hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}} />
              </SettingsList>
            </View>
          </View>
        );
      case 'notificationMealPlanSettings':
        return (
          <View style={ styles.settingsContainer }>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='Do Not Disturb' hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}} />
                <SettingsList.Item title='Do Not Disturb' hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}} />
                <SettingsList.Item title='Do Not Disturb' hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}} />
              </SettingsList>
            </View>
          </View>
        );
      case 'notificationCookbookSettings':
        return (
          <View style={ styles.settingsContainer }>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='Do Not Disturb' hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}} />
                <SettingsList.Item title='Do Not Disturb' hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}} />
                <SettingsList.Item title='Do Not Disturb' hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}} />
              </SettingsList>
            </View>
          </View>
        );
      case 'notificationRecommendSettings':
        return (
          <View style={ styles.settingsContainer }>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='Do Not Disturb' hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}} />
                <SettingsList.Item title='Do Not Disturb' hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}} />
                <SettingsList.Item title='Do Not Disturb' hasSwitch={ true } hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}} />
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
                <SettingsList.Item title='Reset Food Preferences' hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={() => Alert.alert(
                    'Reset Food Preferences',
                    'Are you sure you want to reset your food preferences?',
                    [
                      {text: 'Cancel'},
                      {text: 'Reset', onPress: () => console.log('You just reset your food prefereces!')},
                    ]
                  )} />
                <SettingsList.Item title='Reset Notifications' hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={() => Alert.alert(
                    'Reset Notifications',
                    'Are you sure you want to reset your notifications?',
                    [
                      {text: 'Cancel'},
                      {text: 'Reset', onPress: () => console.log('You just reset your notifications!')},
                    ]
                  )} />
              </SettingsList>
            </View>
            <View style={ styles.listContainer }>
              <SettingsList backgroundColor='#e9e9e9' borderColor='#999'>
                <SettingsList.Item title='Reset All Settings' hasNavArrow={ false }
                  titleStyle={{fontFamily: 'OpenSans'}}
                  onPress={() => Alert.alert(
                    'Reset All Settings',
                    'Are you sure you want to reset all of your settings?',
                    [
                      {text: 'Cancel'},
                      {text: 'Reset', onPress: () => console.log('You just reset your settings.')},
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
                  <SettingsList.Item title='Profile' titleStyle={{fontFamily: 'OpenSans'}}
                    onPress={ Actions.profileSettings } />
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
              <Button containerStyle={ styles.logOutButtonContainer } style={ styles.logOutButtonText }
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
    marginTop: 75,
    overflow: 'hidden',
  },
  listContainer: {
    borderStyle: 'solid',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  logOutButtonContainer: {
    backgroundColor: '#c62733',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  logOutButtonText: {
    color: '#e9e9e9',
  }
});;

export default connect(({ routes }) => ({ routes }))(SettingsView);
