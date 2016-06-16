'use strict';

import React from 'react';
import { Navigator, Text, View } from 'react-native';
import { Router, Scene, Reducer, TabBar } from 'react-native-router-flux';
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
import Error from './components/error_view';
import TabView from './components/tab_view';

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
        <RouterWithRedux createReducer={ reducerCreate }>
          <Scene key='root'>
            <Scene key='welcome' icon={ TabIcon } component={ WelcomeView } title='Welcome'
              initial={ true }></Scene>
            <Scene key='tabbar'>
              <Scene key='main' tabs={ true }>
                <Scene key='dashboard' icon={ TabIcon } component={ DashboardView } title='Dashboard'>
                </Scene>
                <Scene key='weeklyPlan' icon={ TabIcon } component={ WeeklyPlanView } title='Weekly Plan'>
                </Scene>
                <Scene key='trends' icon={ TabIcon } component={ TrendsView } title='Trends'></Scene>
                <Scene key='profile' icon={ TabIcon } component={ ProfileView } title='Profile'></Scene>
                <Scene key='settings' icon={ TabIcon } component={ SettingsView } title='Settings'>
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
