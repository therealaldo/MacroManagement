'use strict';

export const DW_HTML = `
  <html>
    <head>
      <script type="text/javascript" src="https://www.google.com/jsapi"></script>
      <script type="text/javascript">
        google.load('visualization', '1.0', {'packages':['corechart']});
        google.setOnLoadCallback(resolve);
      </script>
    </head>
    <body><div id="days_weeks"></div></body>
  </html>`;

export const DW_JS = `var data = new google.visualization.DataTable();
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
    enableInteractivity: false,
    backgroundColor: 'transparent',
    series: { 0: { color: '#26a65b' }},
    width: 500,
    height: 250,
    hAxis: {
      format: 'M/d',
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

  var chart = new google.visualization.ColumnChart(document.getElementById('days_weeks'));
  chart.draw(data, options);

  resolve(chart.getImageURI());`;
