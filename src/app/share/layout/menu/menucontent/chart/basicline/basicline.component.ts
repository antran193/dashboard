
import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/share/service/chart/chart.service';
import { ChartComponent } from '../chart.component';
declare var Highcharts;


@Component({
  selector: 'app-basicline',
  templateUrl: './basicline.component.html',
  styleUrls: ['./basicline.component.css']
})
export class BasiclineComponent implements OnInit {
  project: number[] = [];
  sale: number[] = [];
  other: any[] = [];
  project1: number[] = [];
  sale1: number[] = [];
  other1: any[] = [];
  chart: any;
  data: any;
  stopInter = null;
  isboolen: boolean = true;
  constructor(private datachart: ChartService) { }

  ngOnInit(): void {

    this.datachart.getdata().subscribe((res) => {
      this.updateData(res);
      this.data = res;
    })
    this.datachart.cast.subscribe((res) => {
      this.isboolen = res;
      if (this.isboolen == true) {
        this.updateChart();
      }
      else {
        clearInterval(this.stopInter)
      }
    });


  }
  updateData(e) {
    for (let i = 0; i < e.length; i++) {
      this.project.push(e[i].project);
      this.sale.push(e[i].sale);
      this.other.push(e[i].other);


    }
    // console.log(this.project1);
    // console.log(this.project);
    this.loadChart();
  }

  // update chart ok

  // updateChart(data) {
  //   this.project=[];
  //   this.sale=[];
  //   this.other = [];
  //   this.project1=[];
  //   this.sale1=[];
  //   this.other1=[];


  //   this.isboolen = !this.isboolen;
  //   if (this.isboolen == true) {
  //     for (let i = 0; i < data.length; i++) {
  //       this.project.push(data[i].project);
  //       this.sale.push(data[i].sale);
  //       this.other.push(data[i].other);
  //       // console.log(this.project);
  //     }

  //     // console.log(this.project);
  //     this.chart.update({
  //       series: [{
  //         name: 'Sales & Distribution',
  //         data: this.project
  //       }, {
  //         name: 'Project Development',
  //         data: this.sale
  //       }, {
  //         name: 'Other',
  //         data: this.other
  //       }],
  //     }, true);
  //   }
  //   else {
  //     for (let i = 0; i < data.length; i++) {
  //       this.project.push(data[i].project1);
  //       this.sale.push(data[i].sale1);
  //       this.other.push(data[i].other1);
  //       // console.log(this.project);
  //     }

  //     console.log(this.project1);
  //     this.chart.update({
  //       series: [{
  //         name: 'Sales ',
  //         data: this.project
  //       }, {
  //         name: 'Project ',
  //         data: this.sale
  //       }, {
  //         name: 'Other sale',
  //         data: this.other
  //       }],
  //     }, true);
  //   }

  // }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  updateChart() {
    var ap = this;
    ap.stopInter = setInterval(function () {
      ap.project = [];
      ap.sale = [];
      ap.other = [];
      // console.log(ap.datachart.valueCSubject);

      if (ap.datachart.valueASubject && ap.datachart.valueBSubject && ap.datachart.valueCSubject) {
        ap.chart.update({
          series: [{
            name: 'Sales & Distribution',
            data: ap.datachart.valueASubject,
            color: ap.getRandomColor()
          },
          {
            name: 'Project Development',
            data: ap.datachart.valueBSubject,
            color: ap.getRandomColor()
          }, {
            name: 'Other',
            data: ap.datachart.valueCSubject,
            color: ap.getRandomColor()
          }],
        }, true);
      }
    }, 500)
  }
  loadChart() {
    this.chart = Highcharts.chart('container', {
      title: {
        text: 'Solar Employment Growth by Sector, 2000-2014'
      },

      subtitle: {
        text: 'Source: thesolarfoundation.com'
      },

      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2000 to 2014'
        }
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2000
        }
      },

      series: [{
        name: 'Sales & Distribution',
        data: this.project
      }, {
        name: 'Project Development',
        data: this.sale
      }, {
        name: 'Other',
        data: this.other
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }

    });
  }

}
