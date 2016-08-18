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

export default class DirectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.data)
    });
  }

  renderRow(item) {
    return (
      <Text style={ styles.itemRow }>
        { item }
      </Text>
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
    flex: 1
  },
  itemRow: {
    marginBottom: 5
  }
});
