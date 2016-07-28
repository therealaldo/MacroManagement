'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

let ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row !== row2 });

export default class GroceryIngredientList extends React.Component {
  constructor(props) {
    super(props);
    let groceryIngredientArray = [];
    for(let i = 0; i < this.props.data.groceryListsById[this.props.selectedGroceryList].ingredients.length; i++) {
      groceryIngredientArray.push(this.props.data.ingredientsById[this.props.data.groceryListsById[this.props.selectedGroceryList].ingredients[i]]);
    };

    this.state = {
      dataSource: ds.cloneWithRows(groceryIngredientArray),
    };
  }

  componentWillReceiveProps(nextProps) {
    let newGroceryIngredientArray = [];
    if(this.props.data.groceryListsById[nextProps.data.selectedGroceryList].ingredients.length !== nextProps.data.groceryListsById[nextProps.data.selectedGroceryList].ingredients.length) {
      for(let i = 0; i < nextProps.data.groceryListsById[nextProps.data.selectedGroceryList].ingredients.length; i++) {
        newGroceryIngredientArray.push(nextProps.data.ingredientsById[nextProps.data.groceryListsById[nextProps.data.selectedGroceryList].ingredients[i]]);
      }
      this.setState({
        dataSource: ds.cloneWithRows(newGroceryIngredientArray)
      })
    }
  }

  navigateToList(listId) {
    this.props.viewGroceryList(listId);
    Actions.groceryIngredients();
  }

  renderRow(ingredient) {
    return (
      <View style={ styles.container }>
        <Text>{ ingredient.name }</Text>
      </View>
    )
  }

  render() {
    return (
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={ this.renderRow.bind(this) }
        enableEmptySections={ true } />
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
