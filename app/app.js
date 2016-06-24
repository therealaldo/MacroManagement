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
import WelcomeView from './views/welcome_view';
import DashboardView from './views/dashboard_view';
import WeeklyPlanView from './views/weekly_plan_view';
import TrendsView from './views/trends_view';
import ProfileView from './views/profile_view';
import SettingsView from './views/settings_view';
import Error from './views/error_view';
import TabView from './views/tab_view';

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

const reducerCreate = params=>{
  const defaultReducer = Reducer(params);
  return (state, action) => {
    console.log('ACTION: ', action);
    return defaultReducer(state, action);
  }
};

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <RouterWithRedux createReducer={ reducerCreate } navigationBarStyle={ styles.navBar }
          titleStyle={ styles.navTitle } sceneStyle={ styles.routerScene }>
          <Scene key='root'>
            <Scene key='welcome' icon={ TabIcon } component={ WelcomeView } title='Welcome'
              initial={ true } hideNavBar></Scene>
            <Scene key='tabbar'>
              <Scene key='main' tabs={ true } hideNavBar>
                <Scene key='dashboard' icon={ TabIcon } title='Dashboard'>
                  <Scene key='mainDashboard' component={ DashboardView } title='Dashboard' />
                </Scene>
                <Scene key='weeklyPlan' icon={ TabIcon } title='Weekly Plan'>
                  <Scene key='mainWeeklyPlan' component={ WeeklyPlanView } title='Weekly Plan' />
                </Scene>
                <Scene key='trends' icon={ TabIcon } title='Trends'>
                  <Scene key='mainTrends' component={ TrendsView } title='Trends' />
                </Scene>
                <Scene key='profile' icon={ TabIcon } title='Profile'>
                  <Scene key='mainProfile' component={ ProfileView } title='Profile' />
                </Scene>
                <Scene key='settings' icon={ TabIcon } title='Settings'>
                  <Scene key='mainSettings' component={ SettingsView } title='Settings' />
                  <Scene key='profileSettings' component={ SettingsView }
                    title='Profile' />
                  <Scene key='privacySettings' component={ SettingsView }
                    title='Sharing & Privacy' />
                  <Scene key='mealSettings' component={ SettingsView }
                    title='Meal Plan' />
                  <Scene key='notificationSettings' component={ SettingsView }
                    title='Notifications' />
                  <Scene key='regionSettings' component={ SettingsView }
                    title='Language & Region' />
                  <Scene key='resetSettings' component={ SettingsView }
                    title='Reset' />
                </Scene>
              </Scene>
            </Scene>
          </Scene>
          <Scene key='error' component={ Error } />
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
