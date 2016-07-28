'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

let ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row !== row2 });

export default class IntoleranceList extends React.Component {
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
      for(let i = 0; i < nextProps.data.intolerances.length; i++) {
        newGroceryListArray.push(nextProps.data.groceryListsById[nextProps.data.groceryLists[i]]);
      }
      this.setState({
        dataSource: ds.cloneWithRows(newGroceryListArray)
      })
    }
  }

  renderRow(list) {
    return (
      <View style={ styles.container }>
        <Text>{ list.name }</Text>
      </View>
    )
  }

  render() {
    return (
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={ this.renderRow }
        enableEmptySections={ true } />
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
