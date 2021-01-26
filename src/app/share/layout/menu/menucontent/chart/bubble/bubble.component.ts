import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/share/service/chart/chart.service';
declare var Highcharts;
interface dataUser {
  name: any,
  value: any
}
@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {
  chart = null;
  a: dataUser[] = [];
  // dataUser : { name: any, value: any }[]=[];
  i = 0;
  project: number[] = [];
  sale: number[] = [];
  other: any[] = [];
  project1: number[] = [];
  sale1: number[] = [];
  other1: any[] = [];
  user: any[] = [];
  pass: any[] = [];
  constructor(private dataChart: ChartService) { }

  ngOnInit(): void {
    this.dataChart.getdata().subscribe((res) => {
      this.letData(res);
      this.loadChart();
    })
  }
  letData(res) {
    for (let i = 0; i < res.length; i++) {
      this.project.push(res[i].project);
      this.sale.push(res[i].sale);
      this.other.push(res[i].other);
      this.project1.push(res[i].project);
      this.sale1.push(res[i].sale);
      this.other1.push(res[i].other);
      this.user.push(res[i].username);
      this.pass.push(res[i].password);
      let dataUser = {
        name: res[i].username,
        value: res[i].sale
      }

      this.a.push(dataUser);
      // console.log(this.a);
    }
  }

  loadChart() {
    console.log(this.a);
    this.chart = Highcharts.chart('container6', {
      chart: {
        type: 'packedbubble',
        height: '100%'
      },
      title: {
        text: 'Carbon emissions around the world (2014)'
      },
      tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
      },
      plotOptions: {
        packedbubble: {
          minSize: '30%',
          maxSize: '120%',
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            splitSeries: false,
            gravitationalConstant: 0.02
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            filter: {
              property: 'y',
              operator: '>',
              value: 250
            },
            style: {
              color: 'black',
              textOutline: 'none',
              fontWeight: 'normal'
            }
          }
        }
      },
      series: [{
        name: 'AnDien',
        data: [this.a]
      },
      ]
    });

  }
}
