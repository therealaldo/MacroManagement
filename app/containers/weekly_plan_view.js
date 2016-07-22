'use strict';

import React, { PropTypes} from 'react';
import { StyleSheet, Text, View, ScrollView, ProgressViewIOS, ListView, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/meals/action_creators';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import DateSwitcher from '../components/date_switcher';
import Icon from 'react-native-vector-icons/Ionicons';

class WeeklyPlanView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    meals: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    intolerances: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={ styles.container }>
        <DateSwitcher selectedDate={ this.props.meals.selectedDate } decrementDate={ this.props.decrementDate }
          incrementDate={ this.props.incrementDate } />
        <ScrollView >
          <View style={ styles.componentContainer }>
             <Text style={ styles.containerTitle }>Progress</Text>
             <ProgressViewIOS style={ styles.progressView } progress={ 0.75 }
              progressTintColor='#efbe14' />
             <View style={ styles.calorieInfo }>
               <Text style={ styles.containerText }>1250/2500 calories</Text>
               <Text style={ styles.containerText }>50%</Text>
             </View>
          </View>
          <View style={ styles.componentContainer }>
            <Text style={ styles.containerTitle }>Breakfast</Text>
            <Icon.Button name='md-add-circle' backgroundColor='#efbe14'
              onPress={ Actions.searchMeal }>
              <Text style={ styles.addMealText }>Add an item</Text>
            </Icon.Button>
          </View>

          <View style={ styles.componentContainer }>
            <Text style={ styles.containerTitle }>Lunch</Text>
            <Icon.Button name='md-add-circle' backgroundColor='#efbe14'
              onPress={ Actions.searchMeal }>
              <Text style={ styles.addMealText }>Add an item</Text>
            </Icon.Button>
          </View>
          <View style={ styles.componentContainer }>
            <Text style={ styles.containerTitle }>Dinner</Text>
            <Icon.Button name='md-add-circle' backgroundColor='#efbe14'
              onPress={ Actions.searchMeal }>
              <Text style={ styles.addMealText }>Add an item</Text>
            </Icon.Button>
          </View>
          <View style={ styles.componentContainer }>
            <Text style={ styles.containerTitle }>Snacks</Text>
            <Icon.Button name='md-add-circle' backgroundColor='#efbe14'
              onPress={ Actions.searchMeal }>
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
    paddingRight: 10,
    paddingBottom: 50
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
    fontFamily: 'OpenSans-Semibold',
    color: '#e9e9e9'
  }
});;

function mapStateToProps(state) {
  return {
    routes: state.routes,
    meals: state.meals,
    users: state.users,
    intolerances: state.meals
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyPlanView);
