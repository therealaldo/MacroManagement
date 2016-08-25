'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

let ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row !== row2 });

export default class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    let groceryListArray = [];
    for(let i = 0; i < this.props.data.groceryLists.length; i++) {
      groceryListArray.push(this.props.data.groceryListsById[this.props.data.groceryLists[i]]);
    };

    this.state = {
      dataSource: ds.cloneWithRows(groceryListArray),
    };
  }

  componentWillReceiveProps(nextProps) {
    let newGroceryListArray = [];
    if(this.props.data.groceryLists.length !== nextProps.data.groceryLists.length) {
      for(let i = 0; i < nextProps.data.groceryLists.length; i++) {
        newGroceryListArray.push(nextProps.data.groceryListsById[nextProps.data.groceryLists[i]]);
      }
      this.setState({
        dataSource: ds.cloneWithRows(newGroceryListArray)
      })
    }
  }

  navigateToList(listId) {
    this.props.viewGroceryList(listId);
    Actions.groceryIngredients();
  }

  handleRemoveList(listId) {
    this.props.removeList(listId, this.props.userId);
  }

  renderRow(list) {
    return (
      <View style={ styles.listRow }>
        <TouchableOpacity onPress={() => this.navigateToList(list.id)}>
          <Text>{ list.name }</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleRemoveList(list.id)}>
          <Icon name='md-remove-circle' size={ 25 } color='#c62733' />
        </TouchableOpacity>
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
  },
  listRow: {
    padding: 7,
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#e9e9e9',
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
