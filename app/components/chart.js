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
    <body><div id="chart_div"></div></body>
  </html>`;

const CHART_JS = `
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Day');
  data.addColumn('number', 'Weight');
  data.addColumn({ type: 'string', role: 'annotation' });
  data.addRows([
      [new Date(2015, 2, 1), 150, '150'],
      [new Date(2015, 2, 2), 152, null],
      [new Date(2015, 2, 3), 146, '146'],
      [new Date(2015, 2, 4), 150, null],
      [new Date(2015, 2, 5), 157, '157'],
      [new Date(2015, 2, 6), 147, null],
      [new Date(2015, 2, 7), 147.5, '147'],
  ]);

  var options = { enableInteractivity: false,
                  legend: {position: 'none'},
                  lineWidth: 3, width:750, height:420,
                  pointShape: 'circle', pointSize: 8,
                  chartArea: { left: 30, width: 690 }, areaOpacity: 0.07,
                  colors: ['#e14c4d'], backgroundColor: { 'fill': '#34343f' },
                  annotations: {
                    textStyle: { fontSize: 26, bold: true, color: '#bbbbbd', auroColor: '#3f3f3f' },
                  },
                  hAxis: {
                    format: 'MMM d',
                    textStyle: {color: '#bbbbbd', fontSize: 16,}, gridlines: { color: 'transparent' },
                  },
                  vAxis: { gridlines: { count: 3, color: '#3f414f' } },
                };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
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
    var imageUri = await this.ctx.evaluateScript(CHART_JS);
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
