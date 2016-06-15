'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import { connect } from 'react-redux';

class SettingsView extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render() {
    return (
      <View style={ styles.container }>
        <Text>Settings page</Text>
        <Text>Current scene title: { this.props.routes.scene.title }</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});;

export default connect(({ routes }) => ({ routes }))(SettingsView);
