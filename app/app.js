'use strict';

// React
import React from 'react';
import { Navigator, Text, View, StyleSheet, Alert } from 'react-native';
import { Router, Scene, Reducer, TabBar } from 'react-native-router-flux';

// Store w/ Redux
import { Provider, connect } from 'react-redux';
import configureStore from './store/configure_store';

// Main Views
import WelcomeView from './containers/welcome_view';
import DashboardView from './containers/dashboard_view';
import WeeklyPlanView from './containers/weekly_plan_view';
import TrendsView from './containers/trends_view';
import ProfileView from './containers/profile_view';
import SettingsView from './containers/settings_view';
import Error from './containers/error_view';

import AddButton from './components/add_button';
import Icon from 'react-native-vector-icons/Ionicons';

const RouterWithRedux = connect()(Router);
const store = configureStore();

class TabIcon extends React.Component {
  render() {
    switch (this.props.title) {
      case 'Dashboard':
        return (
          <Icon name={ this.props.selected ? 'ion-ios-home' : 'ion-ios-home-outline' }
            size={ 30 }
            style={ styles.forwardIcon } />
        );
      case 'Weekly Plan':
        return (
          <Icon name={ this.props.selected ? 'ion-ios-calendar' : 'ion-ios-calendar-outline' }
            size={ 30 }
            style={ styles.forwardIcon } />
        );
      case 'Trends':
        return (
          <Icon name={ this.props.selected ? 'ion-ios-pulse-strong' : 'ion-ios-pulse' }
            size={ 30 }
            style={ styles.forwardIcon } />
        );
      case 'Profile':
        return (
          <Icon name={ this.props.selected ? 'ion-ios-person' : 'ion-ios-person-outline' }
            size={ 30 }
            style={ styles.forwardIcon } />
        );
      case 'Settings':
        return (
          <Icon name={ this.props.selected ? 'ion-ios-gear' : 'ion-ios-gear-outline' }
            size={ 30 }
            style={ styles.forwardIcon } />
        );
    };
  };
};

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RouterWithRedux navigationBarStyle={ styles.navBar }
          titleStyle={ styles.navTitle } sceneStyle={ styles.routerScene }>
          <Scene key='root' hideNavBar>
            <Scene key='welcome' type='jump' icon={ TabIcon } component={ WelcomeView } title='Welcome'
              initial={ true } hideNavBar={ true }></Scene>
            <Scene key='tabbar' tabs hideNavBar>
              <Scene key='dashboard' icon={ TabIcon } title='Dashboard'>
                <Scene key='mainDashboard' initial={ true } component={ DashboardView }
                  renderRightButton={() => <AddButton />}
                  onRight={() => Alert.alert('add pressed')}
                  title='Dashboard'></Scene>
              </Scene>
              <Scene key='weeklyPlan' icon={ TabIcon } title='Weekly Plan'>
                <Scene key='mainWeeklyPlan' initial={ true } component={ WeeklyPlanView }
                  title='Weekly Plan'></Scene>
              </Scene>
              <Scene key='trends' icon={ TabIcon } title='Trends'>
                <Scene key='mainTrends' initial={ true } component={ TrendsView }
                  title='Trends'></Scene>
              </Scene>
              <Scene key='profile' icon={ TabIcon } title='Profile'>
                <Scene key='viewProfile' initial={ true } component={ ProfileView }
                  title='Profile'></Scene>
              </Scene>
              <Scene key='settings' icon={ TabIcon } leftButtonStyle={{paddingBottom: 40}}
                title='Settings' leftButtonIconStyle={{tintColor: '#e9e9e9'}}>
                <Scene key='mainSettings' initial={ true } component={ SettingsView }
                  title='Settings'></Scene>
                <Scene key='profileSettings' component={ SettingsView }
                  title='Profile'></Scene>
                <Scene key='sharePrivacySettings' component={ SettingsView }
                  title='Sharing & Privacy'></Scene>
                <Scene key='mealSettings' component={ SettingsView }
                  title='Meal Plan'></Scene>
                <Scene key='notificationSettings' component={ SettingsView }
                  title='Notifications'></Scene>
                <Scene key='mealNotificationSettings' component={ SettingsView }
                  title='Meal Plan'></Scene>
                <Scene key='notificationSettings' component={ SettingsView }
                  title='Notifications'></Scene>
                <Scene key='notificationMealPlanSettings' component={ SettingsView }
                  title='Meal Plan'></Scene>
                <Scene key='notificationCookbookSettings' component={ SettingsView }
                  title='Cookbook'></Scene>
                <Scene key='notificationRecommendSettings' component={ SettingsView }
                  title='Recommendations'></Scene>
                <Scene key='notificationSettings' component={ SettingsView }
                  title='Notifications'></Scene>
                <Scene key='langRegionSettings' component={ SettingsView }
                  title='Language & Region'></Scene>
                <Scene key='languageSettings' component={ SettingsView }
                  title='Language'></Scene>
                <Scene key='regionSettings' component={ SettingsView }
                  title='Region'></Scene>
                <Scene key='resetSettings' component={ SettingsView }
                  title='Reset'></Scene>
              </Scene>
            </Scene>
          </Scene>
          <Scene key='error' component={ Error }></Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#26a65b',
    borderBottomWidth: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    height: 80
  },
  navTitle: {
    color: '#e9e9e9',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
  },
});
