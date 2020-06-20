import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

var average = [];

var agents = [
  {
    name: 'Kai Richardson',
    data: [15.3, 14.8, 14.8, 15, 15, 0, 0, 14.5, 15, 15.2, 15.3, 14.2, 0, 0],
  },
  {
    name: 'Erin Richardson',
    data: [17.3, 15.8, 16.8, 15.2, 16, 0, 0, 16.5, 17, 16.2, 16.3, 16.2, 0, 0],
  },
  {
    type: 'spline',
    name: 'Average',
    data: [16.3, 14.8, 15.8, 14.2, 15, 0, 0, 15.5, 16, 15.2, 15.3, 15.2, 0, 0],
    marker: {
      lineWidth: 2,
      lineColor: Highcharts.getOptions().colors[3],
      fillColor: 'white',
    },
  },
];

agents.forEach(function (item, index) {
  console.log(item.data, index);
});

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  chartOptions: {};

  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Agent Metrics',
      },
      subtitle: {
        text: 'Two Weeks',
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} Tickets</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },
      xAxis: {
        categories: [
          'Mar 8',
          'Mar 9',
          'Mar 10',
          'Mar 11',
          'Mar 12',
          'Mar 13',
          'Mar 14',
          'Mar 15',
          'Mar 16',
          'Mar 17',
          'Mar 18',
          'Mar 19',
          'Mar 20',
          'Mar 21',
        ],
      },
      yAxis: {
        title: {
          text: 'Tickets Per Hour',
        },
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: agents,
      // [
      //   {
      //     name: 'Kai Richardson',
      //     data: [
      //       15.3,
      //       14.8,
      //       14.8,
      //       15,
      //       15,
      //       0,
      //       0,
      //       14.5,
      //       15,
      //       15.2,
      //       15.3,
      //       14.2,
      //       0,
      //       0,
      //     ],
      //   },
      //   {
      //     name: 'Erin Richardson',
      //     data: [
      //       17.3,
      //       15.8,
      //       16.8,
      //       15.2,
      //       16,
      //       0,
      //       0,
      //       16.5,
      //       17,
      //       16.2,
      //       16.3,
      //       16.2,
      //       0,
      //       0,
      //     ],
      //   },
      // {
      //   type: 'spline',
      //   name: 'Average',
      //   data: [
      //     16.3,
      //     14.8,
      //     15.8,
      //     14.2,
      //     15,
      //     0,
      //     0,
      //     15.5,
      //     16,
      //     15.2,
      //     15.3,
      //     15.2,
      //     0,
      //     0,
      //   ],
      //   marker: {
      //     lineWidth: 2,
      //     lineColor: Highcharts.getOptions().colors[3],
      //     fillColor: 'white',
      //   },
      //   },
      // ],
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
