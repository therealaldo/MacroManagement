'use strict';

import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import WebViewJSContext from 'react-native-webview-js-context';

const GC_HTML = `
  <html>
    <head>
      <script type="text/javascript" src="https://www.google.com/jsapi"></script>
      <script type="text/javascript">
        google.load('visualization', '1.0', {'packages':['corechart']});
        google.setOnLoadCallback(resolve); /* <--- resolve() is called by RNWebViewJSContext */
      </script>
    </head>
    <body><div id="calorie_intake"></div>
          <div id="calorie_progress"></div>
    </body>
  </html>`;

const CHART_INTAKE = `
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Day');
  data.addColumn('number', 'Calorie Intake');
  data.addColumn({ type: 'string', role: 'annotation' });
  data.addRows([
      [new Date(2016, 7, 10), 2300, '2300'],
      [new Date(2016, 7, 11), 2000, null],
      [new Date(2016, 7, 12), 2100, '2100'],
      [new Date(2016, 7, 13), 2240, null],
      [new Date(2016, 7, 14), 2500, '2500'],
      [new Date(2016, 7, 15), 1900, null],
      [new Date(2016, 7, 16), 2010, '2010'],
  ]);

  var options = { enableInteractivity: false,
                  legend: {position: 'none'},
                  lineWidth: 3, width:750, height:420,
                  pointShape: 'circle', pointSize: 8,
                  chartArea: { left: 30, width: 690 }, areaOpacity: 0.07,
                  colors: ['#26a65b'], backgroundColor: { 'fill': '#34343f' },
                  annotations: {
                    textStyle: { fontSize: 26, bold: true, color: '#bbbbbd', auroColor: '#3f3f3f' },
                  },
                  hAxis: {
                    format: 'MMM d',
                    textStyle: {color: '#bbbbbd', fontSize: 16,}, gridlines: { color: 'transparent' },
                  },
                  vAxis: { gridlines: { count: 4, color: '#3f414f' } },
                };

  var chart = new google.visualization.AreaChart(document.getElementById('calorie_intake'));
  chart.draw(data, options);

  resolve(chart.getImageURI()); /* <--- resolve() is called by RNWebViewJSContext */`;

const CHART_PROGRESS = `
var data = new google.visualization.DataTable();
data.addColumn('date', 'Day');
data.addColumn('number', 'Calorie Progression');
data.addColumn({ type: 'string', role: 'annotation' });
data.addRows([
    [new Date(2016, 7, 10), 2300, '2300'],
    [new Date(2016, 7, 11), 2000, null],
    [new Date(2016, 7, 12), 2100, '2100'],
    [new Date(2016, 7, 13), 2240, null],
    [new Date(2016, 7, 14), 2500, '2500'],
    [new Date(2016, 7, 15), 1900, null],
    [new Date(2016, 7, 16), 2010, '2010'],
]);

var options = { enableInteractivity: false,
                legend: {position: 'none'},
                lineWidth: 3, width:750, height:420,
                pointShape: 'circle', pointSize: 8,
                chartArea: { left: 30, width: 690 }, areaOpacity: 0.07,
                colors: ['#26a65b'], backgroundColor: { 'fill': '#34343f' },
                annotations: {
                  textStyle: { fontSize: 26, bold: true, color: '#bbbbbd', auroColor: '#3f3f3f' },
                },
                hAxis: {
                  format: 'MMM d',
                  textStyle: {color: '#bbbbbd', fontSize: 16,}, gridlines: { color: 'transparent' },
                },
                vAxis: { gridlines: { count: 4, color: '#3f414f' } },
              };

var chart = new google.visualization.AreaChart(document.getElementById('calorie_intake'));
chart.draw(data, options);

resolve(chart.getImageURI()); /* <--- resolve() is called by RNWebViewJSContext */`;

class Chart extends React.Component {
  static propTypes: {
    imageUri: PropTypes.string
  };

  componentWillMount() {
    WebViewJSContext.createWithHTML(GC_HTML)
    .then(context => {
      this.ctx = context;
      this.loadChart();
    });
  }

  componentWillUnmount() {
    this.ctx && this.ctx.destroy();
  }

  async loadChart() {
    var imageUri = await this.ctx.evaluateScript(CHART_INTAKE, CHART_PROGRESS);
    // this.setState({ imageUri });
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
