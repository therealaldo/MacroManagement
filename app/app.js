'use strict';

// React
import React from 'react';
import { Navigator, Text, View, StyleSheet } from 'react-native';
import { Router, Scene, Reducer, TabBar } from 'react-native-router-flux';

// Store w/ Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

// Main Views
import WelcomeView from './containers/welcome_view';
import DashboardView from './containers/dashboard_view';
import WeeklyPlanView from './containers/weekly_plan_view';
import TrendsView from './containers/trends_view';
import ProfileView from './containers/profile_view';
import SettingsView from './containers/settings_view';
import Error from './containers/error_view';

const RouterWithRedux = connect()(Router);

const logger = createLogger();
const middleware = [thunk, logger];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

class TabIcon extends React.Component {
  render() {
    return (
      <Text style={{ color: this.props.selected ? 'red' : 'black'}}>{ this.props.title }</Text>
    );
  }
};

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RouterWithRedux navigationBarStyle={ styles.navBar }
          titleStyle={ styles.navTitle } sceneStyle={ styles.routerScene }>
          <Scene key='root' hideNavBar={ true }>
            <Scene key='welcome' type='jump' icon={ TabIcon } component={ WelcomeView } title='Welcome'
              initial={ true } hideNavBar={ true }></Scene>
            <Scene key='tabbar' tabs={ true } hideNavBar={ true }>
              <Scene key='dashboard' icon={ TabIcon } title='Dashboard'>
                <Scene key='mainDashboard' initial={ true } component={ DashboardView }
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
              <Scene key='settings' icon={ TabIcon } title='Settings'>
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  navTitle: {
    color: '#fefefe',
    fontFamily: 'OpenSans-Bold'
  },
});
