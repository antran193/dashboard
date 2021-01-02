import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/share/service/dataservice.service';
import { DataModel } from './datamodel.model';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class TableComponent implements OnInit {
  // keydata: string[] = [];
  datas: DataModel[];
  selecteddatas: DataModel[];
  data: DataModel;
  submitted: boolean;
  userDialog: boolean;
  first = 0;
  rows = 5;
  display = true;
  messsc: Message[];
  constructor(private http: HttpClient, private dataservice: DataserviceService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.dataservice.getdata().subscribe((datahttp: any) => {
      // this.keydata = Object.keys(datahttp[0]);
      this.datas = datahttp;
      console.log(this.datas);
      console.log(this.data);
      this.display = false;
      this.messsc = [
        { severity: 'success', summary: 'Success', detail: 'Data Table Load Success' },
      ];
      setTimeout(() => {
        this.messsc = [];
      }, 2000);


    })
  }
  openNew() {
    this.data = {};
    this.submitted = false;
    this.userDialog = true;
  }
  // next() {
  //   this.first = this.first + this.rows;
  // }

  // prev() {
  //   this.first = this.first - this.rows;
  // }

  // reset() {
  //   this.first = 0;
  // }

  // isLastPage(): boolean {
  //   return this.datas ? this.first === (this.datas.length - this.rows) : true;
  // }

  // isFirstPage(): boolean {
  //   return this.datas ? this.first === 0 : true;
  // }

}
