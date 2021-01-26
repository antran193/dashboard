import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/share/service/chart/chart.service';
declare var Highcharts;
@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.css']
})
export class AreachartComponent implements OnInit {
  project: number[] = [];
  sale: number[] = [];
  other: any[] = [];
  project1: number[] = [];
  sale1: number[] = [];
  other1: any[] = [];
  chart: any;
  data: any;
  pause = null;
  isboolen: boolean = true;
  
  constructor(private dataChart: ChartService) { }

  ngOnInit(): void {


    this.dataChart.getdata().subscribe((res) => {
      this.data = res;
      this.letData(res);
      this.loadChart();

    })

  }
  letData(dataChart) {
    for (let i = 0; i < dataChart.length; i++) {
      this.project.push(dataChart[i].project);
      this.sale.push(dataChart[i].sale);
      this.other.push(dataChart[i].other);
    }

  }
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  
  stopDiscoTime() {
    if (this.pause) {
      clearInterval(this.pause);
      this.dataChart.changeBoolenDisco();
    }
    
  }

  discoTime() {
    this.dataChart.changeBoolenDisco();
    var ap = this;
    this.pause= setInterval(function () {
      
      ap.project = [];
      ap.sale = [];
      ap.other = [];
      // var a = Math.floor((Math.random() * 100) + 1);
      for (let i = 0; i < 100; i++) {
        var a = Math.floor((Math.random() * 100) + -50);
        var b = Math.floor((Math.random() * 100) + -50);
        var c = Math.floor((Math.random() * 100) + -50);
        // var acolor = ap.getRandomColor();
        ap.project.push(a);
        ap.sale.push(b);
        ap.other.push(c);
      }
      ap.dataChart.getdatachart(ap.project,ap.sale,ap.other);
      ap.chart.update({
        series:
          [{
            name: 'Project',
            data: ap.project,
            color: ap.getRandomColor()
          }, {
            name: 'Sale',
              data: ap.sale,
            color: ap.getRandomColor()
          },
          {
            name: 'Other',
            data: ap.other,
            color:ap.getRandomColor()
          }]
      }, true)
    },500)

  }
  disco() {
    
  }
  updateChart(data) {
    var app = this;
    
    setInterval(function () {
      app.isboolen = !app.isboolen;
      app.project = [];
      app.sale = [];
      app.other = [];
      if (app.isboolen == true) {
        app.letData(app.data);
        app.chart.update({
          series:
            [{
              name: 'Project',
              data: app.project
            }, {
              name: 'Sale',
              data: app.sale
            },
            {
              name: 'Other',
              data: app.other
            }]
        }, true)
      }
      else {
        for (let i = 0; i < app.data.length; i++) {
          app.project.push(app.data[i].project1);
          app.sale.push(app.data[i].sale1);
          app.other.push(app.data[i].other1);
        }
        app.chart.update({
          series:
            [{
              name: 'Project',
              data: app.project
            }, {
              name: 'Sale',
              data: app.sale
            },
            {
              name: 'Other',
              data: app.other
            }]
        }, true)
      }
    }, 500);

  }
  loadChart() {
    this.chart = Highcharts.chart('container2', {
      chart: {
        type: 'area'
      },
      accessibility: {
        description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
      },
      title: {
        text: 'US and USSR nuclear stockpiles'
      },
      subtitle: {
        text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
          'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
          'armscontrol.org</a>'
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter: function () {
            return this.value; // clean, unformatted number for year
          }
        },
        accessibility: {
          rangeDescription: 'Range: 1940 to 2017.'
        }
      },
      yAxis: {
        title: {
          text: 'Nuclear weapon states'
        },
        labels: {
          formatter: function () {
            return this.value * 100 + 'k';
          }
        }
      },
      tooltip: {
        pointFormat: '{series.name} Yo Yomost <b>{point.y:,.0f}</b><br/>CLGT {point.x}'
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [{
        name: 'Project',
        data: this.project
      }, {
        name: 'Sale',
        data: this.sale
      },
      {
        name: 'Other',
        data: this.other
      }]
    });
  }

}


