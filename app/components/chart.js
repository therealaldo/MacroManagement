'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import WebViewJSContext from 'react-native-webview-js-context';

const CP_HTML = `
  <html>
    <head>
      <script type="text/javascript" src="https://www.google.com/jsapi"></script>
      <script type="text/javascript">
        google.load('visualization', '1.0', {'packages':['corechart']});
        google.setOnLoadCallback(resolve); /* <--- resolve() is called by RNWebViewJSContext */
      </script>
    </head>
    <body><div id="calorie_progress"></div></body>
  </html>`;

const CP_JS = `
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Day of Week');
  data.addColumn('number', 'Calorie Progress');
  data.addRows([
    [new Date(2016, 7, 15), .9],
    [new Date(2016, 7, 14), .87],
    [new Date(2016, 7, 13), .89],
    [new Date(2016, 7, 12), .97],
    [new Date(2016, 7, 11), 1.0],
    [new Date(2016, 7, 10), .79],
    [new Date(2016, 7, 9), .95],
  ]);

  var options = {
    width: 500,
    height: 250,
    backgroundColor: 'transparent',
    series: { 0: { color: '#26a65b' }},
    hAxis: {
      format: 'EEE \n M/d',
      gridlines: {
        color: 'transparent'
      }
    },
    vAxis: {
      format: '#%',
      viewWindow: {
        min: 0,
        max: 1
      },
      gridlines: {
        count: 2
      },
    },
    legend: {
      position: 'none'
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('calorie_progress'));
  chart.draw(data, options);

  resolve(chart.getImageURI());`;

class Chart extends React.Component {
  static propTypes: {
    imageUri: PropTypes.string
  };

  componentWillMount() {
    WebViewJSContext.createWithHTML(CP_HTML)
    .then(context => {
      this.ctx = context;
      this.loadChart();
    });
  }

  componentWillUnmount() {
    this.ctx && this.ctx.destroy();
  }

  async loadChart() {
    var imageUri = await this.ctx.evaluateScript(CP_JS);
    
  }

  render() {
    return this.props.imageUri ?
      <Image style={ styles.chart } source={{ uri: this.props.imageUri }} />
      : <View />;
  }

}

const styles = StyleSheet.create({
  chart: {
    width: 375,
    height: 300,
  }
});

export default Chart;
