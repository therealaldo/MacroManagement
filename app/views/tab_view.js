'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

// Views
import DashboardView from './dashboard_view';
import WeeklyPlanView from './weekly_plan_view';
import TrendsView from './trends_view';
import ProfileView from './profile_view';
import SettingsView from './settings_view';

const contextTypes = {
  drawer: React.PropTypes.object
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string
};

const TabView = (props, context) => {
  const drawer = context.drawer;
  return (
    <View style={[styles.container, props.sceneStyle ]}>
      { props.name === 'dashboard' &&
        <DashboardView />
      }
      { props.name === 'weeklyPlan' &&
        <WeeklyPlanView />
      }
      { props.name === 'trends' &&
        <TrendsView />
      }
      { props.name === 'profile' &&
        <ProfileView />
      }
      { props.name === 'settings' &&
        <SettingsView />
      }
    </View>
  );
};

TabView.contextTypes = contextTypes;
TabView.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
  },
});

export default TabView;
