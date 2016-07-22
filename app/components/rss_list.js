'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class RssList extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row !== row2 });
  }

  renderRow(rss) {
    return (
      <TouchableHighlight onPress={() => this.props.handleRssView(rss.link)}>
        <View style={ styles.articleContainer }>
          <Text style={ styles.articleTitle }
            numberOfLines={ 1 }>{ rss.title }</Text>
          <Text style={ styles.articleSnippet }
            numberOfLines={ 1 }>{ rss.contentSnippet }</Text>
          <Text style={ styles.articleDate }
            numberOfLines={ 1 }>{ rss.publishedDate }</Text>
        </View>
      </TouchableHighlight>
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
  articleContainer: {
    backgroundColor: '#e9e9e9',
    borderRadius: 7,
    marginBottom: 10,
    height: 90,
    padding: 10,
  },
  articleTitle: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  articleSnippet: {
    fontFamily: 'OpenSans',
    fontSize: 12,
    color: '#333',
    marginBottom: 15,
  },
  articleDate: {
    fontFamily: 'OpenSans-Light',
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  }
});
