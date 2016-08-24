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

export default class IntoleranceList extends React.Component {
  constructor(props) {
    super(props);
    let intoleranceArray = [];
    for(let i = 0; i < this.props.data.intolerances.length; i++) {
      intoleranceArray.push(this.props.data.intolerancesById[this.props.data.intolerances[i]]);
    };

    this.state = {
      dataSource: ds.cloneWithRows(intoleranceArray),
    };
  }

  componentWillReceiveProps(nextProps) {
    let newIntoleranceArray = [];
    if(this.props.data.intolerances.length !== nextProps.data.intolerances.length) {
      for(let i = 0; i < nextProps.data.intolerances.length; i++) {
        newIntoleranceArray.push(nextProps.data.intolerancesById[nextProps.data.intolerances[i]]);
      };
      this.setState({
        dataSource: ds.cloneWithRows(newIntoleranceArray)
      });
    };
  }

  handleRemoveIntolerance(intoleranceId) {
    this.props.removeIntolerance(intoleranceId, this.props.userId);
  }

  renderRow(intolerance) {
    return (
      <View style={ styles.intoleranceRow }>
        <Text>{ intolerance.name }</Text>
        <TouchableOpacity onPress={() => this.handleRemoveIntolerance(intolerance.id)}>
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
  intoleranceRow: {
    padding: 7,
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#e9e9e9',
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
