import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/share/service/chart/chart.service';
declare var Highcharts;
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  data: any;
  project: number;
  project1: any;
  sale: any;
  sale1: any;
  other: any;
  other1: any;
  chart: any;
  i: number = 0;
  isboolen: boolean = false;
  stopInter = null;

  constructor(private dataChart: ChartService) { }

  ngOnInit(): void {
    this.dataChart.getdata().subscribe((res => {
      this.data = res;
      this.letdata(res);
      this.loadChart();
    }))
    this.dataChart.cast.subscribe((res) => {

      this.isboolen = res;
      if (this.isboolen == true) {
        this.startInter();
      }
      else {
        clearInterval(this.stopInter);
      }
    })

  }
  startInter() {
    var app = this;
    app.stopInter = setInterval(function () {
      app.i++;
      if (app.i < app.data.length) {
        app.letdata(app.data);
        app.chart.update({
          series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
              name: 'Project',
              y: app.project,
              sliced: true,
              selected: true,
              color: app.getRandomColor()
            }, {
              name: 'Project 1',
              y: app.project1,
              color: app.getRandomColor()
            }, {
              name: 'Sale 1',
              y: app.sale,
              color: app.getRandomColor()
            }, {
              name: 'Sale',
              y: app.sale1,
              color: app.getRandomColor()
            }, {
              name: 'Other 1',
              y: app.other,
              color: app.getRandomColor()
            }, {
              name: 'Other',
              y: app.other1,
              color: app.getRandomColor()
            }]
          }]

        })
      }
      else {
        app.i = 0;
        app.letdata(app.data);
        app.chart.update({
          series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
              name: 'Project',
              y: app.project,
              sliced: true,
              selected: true,
              color: app.getRandomColor()
            }, {
              name: 'Project 1',
              y: app.project1,
              color: app.getRandomColor()
            }, {
              name: 'Sale 1',
              y: app.sale,
              color: app.getRandomColor()
            }, {
              name: 'Sale',
              y: app.sale1,
              color: app.getRandomColor()
            }, {
              name: 'Other 1',
              y: app.other,
              color: app.getRandomColor()
            }, {
              name: 'Other',
              y: app.other1,
              color: app.getRandomColor()
            }]
          }]

        })
      }
    },500)
  }
  letdata(e) {
    this.project1 = e[this.i].project1;
    this.project = e[this.i].project;
    this.sale = e[this.i].sale;
    this.sale1 = e[this.i].sale1;
    this.other = e[this.i].other;
    this.other1 = e[this.i].other1;
    // console.log(this.project);


  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  updateChart(data) {
    this.i++;
    if (this.i < data.length) {
      this.letdata(data);
      this.chart.update({
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Project',
            y: this.project,
            sliced: true,
            selected: true,
            color: this.getRandomColor()
          }, {
            name: 'Project 1',
            y: this.project1,
            color: this.getRandomColor()
          }, {
            name: 'Sale 1',
            y: this.sale,
            color: this.getRandomColor()
          }, {
            name: 'Sale',
            y: this.sale1,
            color: this.getRandomColor()
          }, {
            name: 'Other 1',
            y: this.other,
            color: this.getRandomColor()
          }, {
            name: 'Other',
            y: this.other1,
            color: this.getRandomColor()
          }]
        }]

      })
    }
    else {
      this.i = 0;
      this.letdata(data);
      this.chart.update({
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Project',
            y: this.project,
            sliced: true,
            selected: true
          }, {
            name: 'Project 1',
            y: this.project1
          }, {
            name: 'Sale 1',
            y: this.sale
          }, {
            name: 'Sale',
            y: this.sale1
          }, {
            name: 'Other 1',
            y: this.other
          }, {
            name: 'Other',
            y: this.other1
          }]
        }]

      })
    }
  }


  loadChart() {
    this.chart = Highcharts.chart('container1', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in January, 2018'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Project',
          y: this.project,
          sliced: true,
          selected: true
        }, {
          name: 'Project 1',
          y: this.project1
        }, {
          name: 'Sale 1',
          y: this.sale
        }, {
          name: 'Sale',
          y: this.sale1
        }, {
          name: 'Other 1',
          y: this.other
        }, {
          name: 'Other',
          y: this.other1
        }]
      }]
    });
  }
}
