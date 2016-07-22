'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity
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
      <View style={ styles.mealContainer }>
        <Image source={{ uri: uri }} style={ styles.mealImage } />
        <View style={ styles.mealTextContainer }>
          <Text style={ styles.mealTitle } numberOfLines={ 1 }>{ mealItem.title }</Text>
          <Text style={ styles.mealTime } numberOfLines={ 1 }>{ mealItem.readyInMinutes } min.</Text>
        </View>
        <View style={ styles.mealButtonContainer }>
          <TouchableOpacity onPress={() => this.props.handleRecipeSearch(mealItem.id)}>
            <Icon name='ios-more' size={ 30 } color='#999' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.addMeal(mealItem)}>
            <Icon name='md-add' size={ 30 } color='#999' />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        <ListView
          dataSource={ this.ds.cloneWithRows(this.props.data) }
          renderRow={ this.renderRow.bind(this) }
          enableEmptySections={ true } />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mealContainer: {
    height: 90,
    flexDirection: 'row',
    backgroundColor: '#e9e9e9',
    borderRadius: 7,
    marginBottom: 10,
    padding: 10,
  },
  mealImage: {
    flex: 3,
    marginRight: 10,
  },
  mealTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 6
  },
  mealTitle: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  mealTime: {
    fontFamily: 'OpenSans-Light',
    fontSize: 14,
    color: '#666',
  },
  mealButtonContainer: {
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'flex-end'
  }
});
