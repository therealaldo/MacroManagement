'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

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
      <Text>{ props.title }</Text>
      {props.name === 'tab1_1' &&
        <Button onPress={Actions.tab1_2}>next screen for tab1_1</Button>
      }
      {props.name === 'tab2_1' &&
        <Button onPress={Actions.tab2_2}>next screen for tab2_1</Button>
      }
      <Button onPress={ () => { Actions.dashboard(); }}>Switch to dashboard</Button>
      <Button onPress={ () => { Actions.weeklyPlan(); }}>Switch to weekly plan</Button>
      <Button onPress={ () => { Actions.trends(); }}>Switch to trends</Button>
      <Button onPress={ () => { Actions.profile(); }}>Switch to profile</Button>
      <Button onPress={ () => { Actions.settings(); }}>Switch to settings</Button>
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
    borderWidth: 2,
    borderColor: 'red'
  },
});

export default TabView;
