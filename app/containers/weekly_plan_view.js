'use strict';

import React, { PropTypes} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import { connect } from 'react-redux';

class WeeklyPlanView extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  // TODO: research a react native calendar package where we can set calendar events necessary to for meal setting
  // next thing would be to write the actions for the view such as SEARCH_MEALS || SET_MEAL, etc.
  render() {
    return (
      <View style={ styles.container }>
        <ScrollView>

        </ScrollView>
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

export default connect(({ routes }) => ({ routes }))(WeeklyPlanView);
