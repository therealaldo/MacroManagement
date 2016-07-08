'use strict';

import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DateSwitcher extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Button containerStyle={ styles.back } onPress={() => Alert.alert('Go back a day pressed')}>
          <Icon name='ios-arrow-back' size={ 26 } />
        </Button>
        <Button containerStyle={ styles.day } onPress={() => Alert.alert('Select specific day pressed')}>
          <Text style={ styles.dayText }>Today</Text>
        </Button>
        <Button containerStyle={ styles.forward } onPress={() => Alert.alert('Go forward a day pressed')}>
          <Icon name='ios-arrow-forward' size={ 26 } />
        </Button>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    backgroundColor: '#e9e9e9',
    borderRadius: 7,
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 10,
  },
  back: {
    flex: 1,
    alignItems: 'center',
    borderRightColor: '#999',
    borderRightWidth: 1,
    borderStyle: 'solid'
  },
  day: {
    flex: 10,
    alignItems: 'center'
  },
  dayText: {
    fontFamily: 'OpenSans',
    fontSize: 16,
  },
  forward: {
    flex: 1,
    alignItems: 'center',
    borderLeftColor: '#999',
    borderLeftWidth: 1,
    borderStyle: 'solid'
  }
});
