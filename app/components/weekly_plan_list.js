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

let ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row !== row2 });

export default class WeeklyPlanList extends React.Component {
  constructor(props) {
    super(props);
    let mealArray = [];
    for(let i = 0; i < this.props.data.mealPlansByDate[this.props.selectedDate][this.props.mealType].length; i++) {
      mealArray.push(this.props.data.mealsById[this.props.data.mealPlansByDate[this.props.selectedDate][this.props.mealType][i]]);
    };

    this.state = {
      dataSource: ds.cloneWithRows(mealArray)
    };
  }

  handleDeleteMeal(mealId) {
    this.props.deleteMeal(this.props.userId, this.props.selectedDate, this.props.mealType, mealId);
  }

  componentWillReceiveProps(nextProps) {
    let newMealArray = [];
    let len = nextProps.data.mealPlansByDate[nextProps.selectedDate][nextProps.mealType].length;

    if(this.props.data.mealPlansByDate[this.props.selectedDate][this.props.mealType].length !== nextProps.data.mealPlansByDate[nextProps.selectedDate][nextProps.mealType]) {
      for(let i = 0; i < len; i++) {
        newMealArray.push(nextProps.data.mealsById[nextProps.data.mealPlansByDate[nextProps.selectedDate][nextProps.mealType][i]]);
      };
    };

    this.setState({
      dataSource: ds.cloneWithRows(newMealArray)
    });
  }

  renderRow(mealItem) {
    return (
      <View style={ styles.mealContainer }>
        <Text style={ styles.mealName }>{ mealItem.name }</Text>
        <TouchableOpacity style={ styles.removeButton } onPress={() => this.handleDeleteMeal(mealItem.mealId)}>
          <Icon name='md-remove-circle' size={ 25 } color='#c62733' />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        <ListView
          dataSource={ this.state.dataSource }
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
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#e9e9e9',
    borderRadius: 7,
    marginBottom: 10,
    padding: 5,
    width: 339,
    justifyContent: 'space-between'
  },
  mealName: {
    fontFamily: 'OpenSans',
    fontSize: 18
  },
  removeButton: {

  }
});
