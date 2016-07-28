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
import moment from 'moment';
import WeeklyPlanList from '../components/weekly_plan_list';

class WeeklyPlanView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    meals: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    intolerances: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.fetchUserMeals(this.props.users.userId);
  }

  handleBreakfastSearch() {
    this.props.dispatch(this.props.searchBreakfast());
    Actions.searchMeal();
  }

  handleLunchSearch() {
    this.props.dispatch(this.props.searchLunch());
    Actions.searchMeal();
  }

  handleDinnerSearch() {
    this.props.dispatch(this.props.searchDinner());
    Actions.searchMeal();
  }

  handleIncrementDate() {
    let incrementedDate = moment(this.props.meals.selectedDate, 'ddd, MMM D, YYYY', true).clone().add(1, 'day');
    this.props.incrementDate(incrementedDate);
    this.props.addMealPlan(incrementedDate.format('ddd, MMM D, YYYY'));
  }

  handleDecrementDate() {
    let decrementedDate = moment(this.props.meals.selectedDate, 'ddd, MMM D, YYYY', true).clone().subtract(1, 'day');
    this.props.decrementDate(decrementedDate);
    this.props.addMealPlan(decrementedDate.format('ddd, MMM D, YYYY'));
  }

  render() {
    return (
      <View style={ styles.container }>
        <DateSwitcher selectedDate={ this.props.meals.selectedDate }
          decrementDate={ this.handleDecrementDate.bind(this) }
          incrementDate={ this.handleIncrementDate.bind(this) } />
<<<<<<< HEAD
        <ScrollView>
=======
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
>>>>>>> dcf07855b6c7c61d63eb8eb176712b91b65de023
          <View style={ styles.componentContainer }>
            <Text style={ styles.containerTitle }>Breakfast</Text>
            <WeeklyPlanList
              data={ this.props.meals }
              deleteMeal={ this.props.deleteMeal }
              userId={ this.props.users.userId }
              selectedDate={ this.props.meals.selectedDate }
              mealType='breakfast' />
            <Icon.Button name='md-add-circle' backgroundColor='#efbe14'
              onPress={ this.handleBreakfastSearch.bind(this) }>
              <Text style={ styles.addMealText }>Add an item</Text>
            </Icon.Button>
          </View>
          <View style={ styles.componentContainer }>
            <Text style={ styles.containerTitle }>Lunch</Text>
            <WeeklyPlanList
              data={ this.props.meals }
              deleteMeal={ this.deleteMeal }
              userId={ this.props.users.userId }
              selectedDate={ this.props.meals.selectedDate }
              mealType='lunch' />
            <Icon.Button name='md-add-circle' backgroundColor='#efbe14'
              onPress={ this.handleLunchSearch.bind(this) }>
              <Text style={ styles.addMealText }>Add an item</Text>
            </Icon.Button>
          </View>
          <View style={ styles.componentContainer }>
            <Text style={ styles.containerTitle }>Dinner</Text>
            <WeeklyPlanList
              data={ this.props.meals }
              deleteMeal={ this.deleteMeal }
              userId={ this.props.users.userId }
              selectedDate={ this.props.meals.selectedDate }
              mealType='dinner' />
            <Icon.Button name='md-add-circle' backgroundColor='#efbe14'
              onPress={ this.handleDinnerSearch.bind(this) }>
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
