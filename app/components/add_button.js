'use strict';

import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AddButton extends React.Component {
  render() {
    return (
      <Button onPress={() => Alert.alert('Add pressed')}>
        <Icon name='md-add-circle' size={ 38 } color='#efbe14' />
      </Button>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
