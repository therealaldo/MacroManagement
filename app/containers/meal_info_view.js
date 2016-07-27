'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicatorIOS,
  ListView
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/meals/action_creators';
import Icon from 'react-native-vector-icons/Ionicons';
import HTMLView from 'react-native-htmlview';
import SafariView from 'react-native-safari-view';
import IngredientList from '../components/ingredient_list';
import DirectionList from '../components/direction_list';
import api from '../utils/api';

class MealInfoView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    meals: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
  };

  handleAddMeal(selectedDate, mealType, userId, mealId, title, image) {
    let meal = {
      id: mealId,
      title: title,
      image: image
    };
    api.getRecipeInfo(meal.id)
    .then((response) => {
      let calories = Math.floor(response.nutrition.nutrients[0].amount);
      this.props.addMeal(selectedDate, mealType, userId, meal, calories);
    })
    .catch((err) => {
      this.props.dispatch(this.props.addMealFailure(err));
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        { this.props.meals.isFetching ?
          <ActivityIndicatorIOS style={ styles.spinner }
            animating={ this.props.meals.isFetching }
            color='#e9e9e9'
            size="large" /> :
          <ScrollView style={ styles.scrollContainer }>
            <View style={ styles.infoContainer }>
              <View style={ styles.imageContainer }>
                <Image style={ styles.mealPhoto }  source={{ uri: this.props.meals.mealInfo.image }} />
              </View>
              <View style={ styles.nameContainer }>
                <Text style={ styles.mealTitle }>{ this.props.meals.mealInfo.name }</Text>
                <View style={ styles.nameDetails }>
                  <Text style={ styles.details }>Cook Time: { this.props.meals.mealInfo.readyIn } min.</Text>
                  <Text style={ styles.details }>Servings: { this.props.meals.mealInfo.servings }</Text>
                </View>
              </View>
              <View style={ styles.detailContainer }>
                <Text style={ styles.sectionTitle }>Summary</Text>
                <View style={ styles.sectionContent }>
                  <HTMLView value={ this.props.meals.mealInfo.summary } />
                </View>
              </View>
              <View style={ styles.detailContainer }>
                <Text style={ styles.sectionTitle }>Ingredients</Text>
                <View style={ styles.sectionContent }>
                  <IngredientList data={ this.props.meals.mealInfo.ingredients } />
                </View>
              </View>
              <View style={ styles.detailContainer }>
                <Text style={ styles.sectionTitle }>Directions</Text>
                <View style={ styles.sectionContent }>
                  <DirectionList data={ this.props.meals.mealInfo.steps } />
                </View>
              </View>
              <View style={ styles.detailContainer }>
                <Icon.Button name='md-add-circle' size={ 30 } backgroundColor='#efbe14'
                  onPress={ () => this.handleAddMeal(this.props.meals.selectedDate, this.props.meals.selectedMealType, this.props.users.userId, this.props.meals.mealInfo.mealId, this.props.meals.mealInfo.name, this.props.meals.mealInfo.image) }>
                  <Text style={ styles.addMealText }>Add meal</Text>
                </Icon.Button>
              </View>
            </View>
          </ScrollView>
        }
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26a65b',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  scrollContainer: {
    marginTop: 80,
    borderRadius: 7,
    overflow: 'hidden',
    marginBottom: 10
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    borderRadius: 7,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 200,
  },
  mealPhoto: {
    height: 200,
  },
  nameContainer: {
    height: 100,
    padding: 10,
    marginBottom: 20,
  },
  mealTitle: {
    fontSize: 20,
    fontFamily: 'OpenSans-Semibold',
    marginBottom: 10
  },
  nameDetails: {
    flexDirection: 'row',
  },
  details: {
    fontFamily: 'OpenSans',
    marginRight: 15
  },
  detailContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 5,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderColor: '#999'
  },
  sectionContent: {
    flex: 1
  },
  spinner: {
    flex: 1
  },
  tabView: {
    height: 100,
    marginBottom: 100
  },
  addMealText: {
    fontSize: 18,
    fontFamily: 'OpenSans-Semibold',
    color: '#e9e9e9',
    padding: 10,
    alignSelf: 'center'
  }
});

function mapStateToProps(state) {
  return {
    routes: state.routes,
    meals: state.meals,
    users: state.users
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MealInfoView);
