import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/share/service/chart/chart.service';
declare var Highcharts;
@Component({
  selector: 'app-column3d',
  templateUrl: './column3d.component.html',
  styleUrls: ['./column3d.component.css']
})
export class Column3dComponent implements OnInit {
  loadCharts = null;
  sale: any[] = [];
  isboolen: boolean = false;
  stopInter= null;
  constructor(private dataChart: ChartService) { }

  ngOnInit(): void {
    this.loadChart();
    this.dataChart.cast.subscribe((res) => {
      this.isboolen = res;
      if (this.isboolen == true) {
        this.startInter();
      }
      else
      {
        clearInterval(this.stopInter);
        }
    })
    this.sale = this.dataChart.valueASubject;
    
  }
  startInter() { 
    var app = this;
    app.stopInter = setInterval(function ()  {
      app.loadCharts.update({
        series: [{
          name: 'Sales',
          data: app.dataChart.valueASubject
        }]
      })
    },500)
  }
  loadChart() {
    this.loadCharts = Highcharts.chart('container3', {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 25,
          depth: 70
        }
      },
      title: {
        text: '3D chart with null values'
      },
      subtitle: {
        text: 'Notice the difference between a 0 value and a null point'
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2000
        }
      },
      // plotOptions: {
      //   column: {
      //     depth: 25
      //   },
      //   pointStart: 2000
      // },
      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2000 to 2014'
        }
      },
      // xAxis: {
      //   categories: Highcharts.getOptions().lang.shortMonths,
      //   labels: {
      //     skew3d: true,
      //     style: {
      //       fontSize: '16px'
      //     }
      //   }
      // },
      yAxis: {
        title: {
          text: null
        }
      },
      series: [{
        name: 'Sales',
        data: [2, 3, null, 4, 0, 5, 1, 4, 6, 3,1,2,3,4,5,6,3,3,2,5]
      }]
    });
  }

}
