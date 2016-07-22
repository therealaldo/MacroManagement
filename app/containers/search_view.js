'use strict';

import React, { PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicatorIOS,
  TextInput
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/meals/action_creators';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import MealList from '../components/meal_list';

class SearchView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    meals: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    intolerances: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
  };

  handleKeywordChange(e) {
    this.props.setSearchKeyword(e.nativeEvent.text.trim())
  }

  handleSubmitEdit(e) {
    this.props.searchMeal(this.props.meals.searchKeyword, 0);
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.searchInputContainer }>
          <TextInput style={ styles.searchInput }
            value={ this.props.meals.searchKeyword }
            onChange={ this.handleKeywordChange.bind(this) }
            onSubmitEditing={ this.handleSubmitEdit.bind(this) }
            placeholder='Search for meals' />

          {this.props.meals.isFetching ?
            <ActivityIndicatorIOS style={ styles.spinner }
              animating={ this.props.meals.isFetching }
              color='#e9e9e9'
              size="large" /> :
            <ScrollView style={ styles.mealResultsContainer }>
              <MealList data={ this.props.meals.mealResults } baseUri={ this.props.meals.baseUri } />
            </ScrollView>
          }
        </View>
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
  searchInputContainer: {
    flex: 1,
    marginTop: 80,
  },
  searchInput: {
    height: 50,
    padding: 10,
    backgroundColor: '#e9e9e9',
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 7,
    marginBottom: 20,
  },
  spinner: {
    flex: 1,
  }
});

function mapStateToProps(state) {
  return {
    routes: state.routes,
    meals: state.meals,
    users: state.users,
    intolerances: state.intolerances,
    settings: state.settings
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
