'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import WebViewJSContext from 'react-native-webview-js-context';
import { DW_HTML, DW_JS } from '../constants/days_weeks';

export default class DWChart extends React.Component {
  static propTypes: {
    imageUri: PropTypes.string
  };

  state = {
    chartUri: null
  };

  componentWillMount() {
    WebViewJSContext.createWithHTML(DW_HTML)
    .then(context => {
      this.ctx = context;
      this.loadChart();
    });
  }

  componentWillUnmount() {
    this.ctx && this.ctx.destroy();
  }

  async loadChart() {
    let chartUri = await this.ctx.evaluateScript(DW_JS)
    .then((chartUri) => {
      this.setState({ chartUri });
    });
  }

  render() {
    return this.state.chartUri ?
      <Image style={ styles.chart } source={{ uri: this.state.chartUri }} />
      : <Text>loading...</Text>;
  }
};

const styles = StyleSheet.create({
  chart: {
    width: 350,
    height: 200
  }
});
