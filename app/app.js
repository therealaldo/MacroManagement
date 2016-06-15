'use strict';

import React from 'react';
import { Navigator, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import WelcomeView from './components/welcome_view';
import DashboardView from './components/dashboard_view';
import WeeklyPlanView from './components/weekly_plan_view';
import TrendsView from './components/trends_view';
import ProfileView from './components/profile_view';
import SettingsView from './components/settings_view';
import TabView from './components/tab_view';
import NavDrawer from './components/nav_drawer';

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
        <RouterWithRedux>
          <Scene key='root'>
            <Scene key='welcome' icon={ TabIcon } component={ WelcomeView } title='Welcome'
              initial={ true }></Scene>
            <Scene key='tabbar' tabs={ true } component={ NavDrawer }>
              <Scene key='dashboard' component={ TabView } title='Dashboard' initial={ true }>
              </Scene>
              <Scene key='weeklyPlan' component={ TabView } title='Weekly Plan'></Scene>
              <Scene key='trends' component={ TabView } title='Trends'></Scene>
              <Scene key='profile' component={ TabView } title='Profile'></Scene>
              <Scene key='settings' component={ TabView } title='Settings'></Scene>
            </Scene>
          </Scene>
          <Scene key='error' component={ Error } />
        </RouterWithRedux>
      </Provider>
    )
  }
}
