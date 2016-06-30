'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import { connect } from 'react-redux';

class TrendsView extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  // TODO: find a react native graph package and start to incorporate that functionality
  render() {
    return (
      <View style={ styles.container }>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#26a65b',
  }
});;

export default connect(({ routes }) => ({ routes }))(TrendsView);
