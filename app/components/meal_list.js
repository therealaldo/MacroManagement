'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MealList extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row !== row2 });
  }

  renderRow(mealItem) {
    let uri = `https://spoonacular.com/recipeImages/${ mealItem.image }`;
    return (
      <View style={ styles.row }>
        <Image source={{ uri: uri }} style={ styles.mealImage } />
        <Text>{ mealItem.title }</Text>
        <Text>{ mealItem.readyInMinutes } min.</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        <ListView
          dataSource={ this.ds.cloneWithRows(this.props.data) }
          renderRow={ this.renderRow }
          enableEmptySections={ true }/>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
  },
  row: {
    height: 120,
    flexDirection: 'row',
  },
  mealImage: {
    width: 100,
    height: 100,
  }
});
