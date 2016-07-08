'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, ProgressViewIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from 'react-native-button';

class DashboardView extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.progressContainer }>
           <Text style={ styles.containerTitle }>Progress</Text>
           <ProgressViewIOS style={ styles.progressView } progress={ 0.5 }
            progressTintColor='#efbe14' />
           <View style={ styles.calorieInfo }>
             <Text style={ styles.containerText }>1250/2500 calories</Text>
             <Text style={ styles.containerText }>50%</Text>
           </View>
        </View>
        <Button style={ styles.nextMealButton } onPress={ Actions.mainWeeklyPlan }>
          <View style={ styles.nextMealContainer }>
            <View style={ styles.nextMealButtonContainer }>
              <View style={ styles.nextMealButtonText }>
                <Text style={ styles.containerTitle }>Upcoming Meal</Text>
                <Text style={ styles.containerText }>Chicken Alfredo Pasta</Text>
              </View>
              <View style={ styles.nextMealButtonIcon }>
                <Icon name='ios-arrow-forward' size={ 30 } style={ styles.forwardIcon } />
              </View>
            </View>
          </View>
        </Button>
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
  containerTitle: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16,
    marginBottom: 15,
  },
  progressView: {
    marginBottom: 15
  },
  calorieInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerText: {
    fontFamily: 'OpenSans',
    fontSize: 16,
  },
  nextMealContainer: {
    marginTop: 10,
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    padding: 10,
  },
  nextMealButton: {
    flex: 1,
    color: 'transparent'
  },
  nextMealButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nextMealButtonText: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  nextMealButtonIcon: {
    flexDirection: 'column',
    justifyContent: 'center'
  },

});

export default connect(({ routes }) => ({ routes }))(DashboardView);
