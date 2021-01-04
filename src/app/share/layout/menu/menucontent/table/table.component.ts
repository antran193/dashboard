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
  constructor(private http: HttpClient, private dataservice: DataserviceService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {

    this.dataservice.getdata().subscribe((datahttp: any) => {
      // this.keydata = Object.keys(datahttp[0]);
      this.datas = datahttp;
      console.log(this.datas);
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
  editData(data: DataModel) {
    this.data = { ...data };
    console.log(this.data);
    console.log(this.data.username);
    console.log(this.data.password);
    this.userDialog = true;
  }
  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  // saveProduct() {
  //   this.submitted = true;

  //   if (this.data.username.trim()) {
  //     if (this.data.id) {
  //       this.datas[this.findIndexById(this.data.id)] = this.data;
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'data Updated', life: 3000 });
  //     }
  //     else {
  //       this.data.id = this.createId();
  //       this.datas.push(this.data);
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'data Created', life: 3000 });
  //     }

  //     this.datas = [...this.datas];
  //     this.userDialog = false;
  //     this.data = {};
  //   }
  // }

  // findIndexById(id: string): number {
  //   let index = -1;
  //   for (let i = 0; i < this.datas.length; i++) {
  //     if (this.datas[i].id === id) {
  //       index = i;
  //       break;
  //     }
  //   }

  //   return index;
  // }

  // createId(): string {
  //   let id = '';
  //   var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   for (var i = 0; i < 5; i++) {
  //     id += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   return id;
  // }
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
