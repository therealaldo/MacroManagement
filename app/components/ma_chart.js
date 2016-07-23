'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import WebViewJSContext from 'react-native-webview-js-context';

const MA_HTML = `
  <html>
    <head>
      <script type="text/javascript" src="https://www.google.com/jsapi"></script>
      <script type="text/javascript">
        google.load('visualization', '1.0', {'packages':['corechart', 'line']});
        google.setOnLoadCallback(resolve);
      </script>
    </head>
    <body><div id="months_all"></div></body>
  </html>
  `;

const MA_JS = `
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Day of Week');
  data.addColumn('number', 'Calorie Intake');
  data.addRows([
    [new Date(2016, 7, 15), 2300],
    [new Date(2016, 7, 14), 2250],
    [new Date(2016, 7, 13), 2600],
    [new Date(2016, 7, 12), 2100],
    [new Date(2016, 7, 11), 2475],
    [new Date(2016, 7, 10), 2000],
    [new Date(2016, 7, 9), 2800],
    [new Date(2016, 7, 8), 2300],
    [new Date(2016, 7, 7), 2250],
    [new Date(2016, 7, 6), 2600],
    [new Date(2016, 7, 5), 2100],
    [new Date(2016, 7, 4), 2475],
    [new Date(2016, 7, 3), 2000],
    [new Date(2016, 7, 2), 2800],
    [new Date(2016, 7, 1), 2300],
    [new Date(2016, 6, 30), 2250],
    [new Date(2016, 6, 29), 2600],
    [new Date(2016, 6, 28), 2100],
    [new Date(2016, 6, 27), 2475],
    [new Date(2016, 6, 26), 2000],
    [new Date(2016, 6, 25), 2800],
  ]);

  var options = {
    width: 500,
    height: 250,
    backgroundColor: 'transparent',
    series: { 0: { color: '#26a65b' }},
    hAxis: {
			format: 'MMM d',
      gridlines: {
   			color: 'transparent'
		  }
			},
		vAxis: {
  		format: 'short',
      gridlines: {
        count: 2
      },
    },
    legend: {
      position: 'none'
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('months_all'));
  chart.draw(data, options);

  resolve(chart.getImageURI());
`;

export default class MAChart extends React.Component {
  static propTypes: {
    imageUri: PropTypes.string
  };

  componentWillMount() {
    WebViewJSContext.createWithHTML(MA_HTML)
    .then(context => {
      this.ctx = context;
      this.loadChart();
    });
  }

  componentWillUnmount() {
    this.ctx && this.ctx.destroy();
  }

  async loadChart() {
    var imageUri = await this.ctx.evaluateScript(MA_JS);
    this.props.handleUriChange(imageUri);
  }

  render() {
    return this.props.imageUri ?
      <Image style={ styles.chart } source={{ uri: this.props.imageUri }} />
      : <Text>loading...</Text>;
  }

}

const styles = StyleSheet.create({
  chart: {
    width: 500,
    height: 250,
  }
});
