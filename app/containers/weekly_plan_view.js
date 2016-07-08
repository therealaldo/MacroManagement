'use strict';

import React, { PropTypes} from 'react';
import { StyleSheet, Text, View, ScrollView, ProgressViewIOS, ListView, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import DateSwitcher from '../components/date_switcher';
import Icon from 'react-native-vector-icons/Ionicons';

class WeeklyPlanView extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  // next thing would be to write the actions for the view such as SEARCH_MEALS || SET_MEAL, etc.
  render() {
    return (
      <View style={ styles.container }>
        <DateSwitcher />
        <ScrollView >
          <View style={ styles.componentContainer }>
             <Text style={ styles.containerTitle }>Progress</Text>
             <ProgressViewIOS style={ styles.progressView } progress={ 0.5 }
              progressTintColor='#efbe14' />
             <View style={ styles.calorieInfo }>
               <Text style={ styles.containerText }>1250/2500 calories</Text>
               <Text style={ styles.containerText }>50%</Text>
             </View>
          </View>
          <View style={ styles.componentContainer }>
            <Text style={ styles.containerTitle }>Breakfast</Text>
            <Icon.Button name='md-add-circle' backgroundColor='#efbe14'
              onPress={() => Alert.alert('add meal pressed')}>
              <Text style={ styles.addMealText }>Add an item</Text>
            </Icon.Button>
          </View>

          <View style={ styles.componentContainer }>
            <Text style={ styles.containerTitle }>Lunch</Text>
            <Icon.Button name='md-add-circle' backgroundColor='#efbe14'
              onPress={() => Alert.alert('add meal pressed')}>
              <Text style={ styles.addMealText }>Add an item</Text>
            </Icon.Button>
          </View>
          <View style={ styles.componentContainer }>
            <Text style={ styles.containerTitle }>Dinner</Text>
            <Icon.Button name='md-add-circle' backgroundColor='#efbe14'
              onPress={() => Alert.alert('add meal pressed')}>
              <Text style={ styles.addMealText }>Add an item</Text>
            </Icon.Button>
          </View>
          <View style={ styles.componentContainer }>
            <Text style={ styles.containerTitle }>Snacks</Text>
            <Icon.Button name='md-add-circle' backgroundColor='#efbe14'
              onPress={() => Alert.alert('add meal pressed')}>
              <Text style={ styles.addMealText }>Add an item</Text>
            </Icon.Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#26a65b',
    paddingLeft: 10,
    paddingRight: 10
  },
  componentContainer: {
    padding: 10,
    backgroundColor: '#e9e9e9',
    borderRadius: 7,
    marginBottom: 10,
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
  addMealText: {
    fontSize: 14,
    fontFamily: 'OpenSans',
    color: '#e9e9e9'
  }
});;

export default connect(({ routes }) => ({ routes }))(WeeklyPlanView);
