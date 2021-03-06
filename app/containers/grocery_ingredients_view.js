'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  InteractionManager
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/grocery_lists/action_creators';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import GroceryIngredientList from '../components/grocery_ingredient_list';

class GroceryListIngredientView extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    groceryLists: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.fetchListIngredients(this.props.groceryLists.selectedGroceryList);
  }

  handleKeywordChange(e) {
    this.props.setIngredientKeyword(e.nativeEvent.text.trim());
  }

  handleSubmitEdit(e) {
    this.props.addGroceryItem(this.props.groceryLists.selectedGroceryList, this.props.groceryLists.ingredientKeyword);
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.groceryListInputContainer }>
          <TextInput style={ styles.groceryListInput }
            value={ this.props.groceryLists.ingredientKeyword }
            onChange={ this.handleKeywordChange.bind(this) }
            onSubmitEditing={ this.handleSubmitEdit.bind(this) }
            placeholder='Add an ingredient' />
          <ScrollView style={ styles.groceryListContainer }>
            <GroceryIngredientList data={ this.props.groceryLists }
              selectedGroceryList={ this.props.groceryLists.selectedGroceryList }
              removeIngredient={ this.props.removeGroceryItem } />
          </ScrollView>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
    backgroundColor: '#26a65b'
  },
  groceryListInputContainer: {
    marginTop: 80,
    flex: 1
  },
  groceryListInput: {
    height: 50,
    padding: 10,
    backgroundColor: '#e9e9e9',
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 7,
    marginBottom: 15,
  }
});

function mapStateToProps(state) {
  return {
    routes: state.routes,
    groceryLists: state.groceryLists,
    users: state.users
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GroceryListIngredientView);
