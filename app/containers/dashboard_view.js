'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, ProgressViewIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class DashboardView extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.progressContainer }>
           <Text style={ styles.progressTitle }>Progress</Text>
           <ProgressViewIOS style={ styles.progressView } progress={ 0.5 }
            progressTintColor='#efbe14' />
           <View style={ styles.calorieInfo }>
             <Text style={ styles.percentage }>1250/2500 calories</Text>
             <Text style={ styles.percentage }>50%</Text>
           </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26a65b',
    paddingLeft: 10,
    paddingRight: 10,
  },
  progressContainer: {
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    marginTop: 75,
    padding: 10,
  },
  progressTitle: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 18,
  },
  progressView: {
    marginTop: 15,
    marginBottom: 15
  },
  calorieInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  percentage: {
    fontFamily: 'OpenSans',
  }
});

export default connect(({ routes }) => ({ routes }))(DashboardView);
