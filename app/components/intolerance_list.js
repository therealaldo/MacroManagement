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
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  renderRow(intolerance) {
    return (
      <View style={ styles.container }>
        
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
