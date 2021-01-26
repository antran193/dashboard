import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/share/service/chart/chart.service';
declare var Highcharts;

@Component({
  selector: 'app-basiccolumn',
  templateUrl: './basiccolumn.component.html',
  styleUrls: ['./basiccolumn.component.css']
})
export class BasiccolumnComponent implements OnInit {
  loadChart = null;
  tokyo: any[] = [];
  vietnam: any[] = [];
  pakistan: any[] = [];

  constructor(private dataChart : ChartService) { }

  ngOnInit(): void {
    this.dataChart.getdata().subscribe((res) => {
      this.letData(res);
      this.loadCharts();
    })
    
  }


  letData(res) {
    for (let i = 0; i < res.length; i++){
      this.tokyo.push(res[i].sale);
      this.vietnam.push(res[i].project);
      this.pakistan.push(res[i].other);

    }
  }
  loadCharts() {
    this.loadChart=Highcharts.chart('container5', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Monthly Average Rainfall'
      },
      subtitle: {
          text: 'Source: WorldClimate.com'
      },
      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2000 to 2014'
        }
      },
      // xAxis: {
      //     categories: [
      //         'Jan',
      //         'Feb',
      //         'Mar',
      //         'Apr',
      //         'May',
      //         'Jun',
      //         'Jul',
      //         'Aug',
      //         'Sep',
      //         'Oct',
      //         'Nov',
      //         'Dec'
      //     ],
      //     crosshair: true
      // },
      yAxis: {
          min: 0,
          title: {
              text: 'Rainfall (mm)'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
          pointStart: 2000
        }
      },
      // plotOptions: {
      //     column: {
      //         pointPadding: 0.2,
      //         borderWidth: 0
      //     }
      // },
      series: [{
          name: 'Tokyo',
          data: this.tokyo
  
      }, {
          name: 'Viet Nam',
          data: this.vietnam
      }, {
          name: 'Pakistan',
          data: this.pakistan
  
      }, ]
  });
  }

}
