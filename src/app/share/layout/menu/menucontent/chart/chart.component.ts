import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [MessageService]
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
