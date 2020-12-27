import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/share/service/dataservice.service';
import { DataModel } from './datamodel.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  keydata: string[] = [];
  datas: DataModel[] = [];
  first = 0;
  rows = 5;
  constructor(private http: HttpClient, private dataservice: DataserviceService) { }

  ngOnInit(): void {

    this.dataservice.getdata().subscribe((datahttp: DataModel[]) => {
      this.keydata = Object.keys(datahttp[0]);
      this.datas = datahttp;
      console.log(this.datas);
    })
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.datas ? this.first === (this.datas.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.datas ? this.first === 0 : true;
  }

}
