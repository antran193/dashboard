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
    this.tableupdate();

    setTimeout(() => {
      this.messsc = [];
    }, 2000);

  }
  tableupdate() {
    this.dataservice.getdata().subscribe((datahttp: any) => {
      // this.keydata = Object.keys(datahttp[0]);
      this.datas = datahttp;
      // console.log(this.datas);
      this.display = false;
      this.messsc = [
        { severity: 'success', summary: 'Success', detail: 'Data Table Load Success' },
      ];
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

  saveProduct() {
    this.submitted = true;
    for (let i = 0; i < this.datas.length; i++) {
      if (this.data.index === this.datas[i].index) {
        this.dataservice.updatedata(this.data).subscribe((res) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated', life: 3000 });
          this.tableupdate();
        });
        break;
      }
      else {
        this.dataservice.postdata(this.data).subscribe((res) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Created', life: 3000 });
          this.tableupdate();

        })
        break;
      }

    }
    this.userDialog = false;
    console.log(this.data);
  }
  deleteUser(data: DataModel) {
    // this.data = { ...data };
    // console.log(this.data);
    console.log(data);
    this.confirmationService.confirm({
      message: ' Are you sure you want to delete the selected users?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dataservice.deleteuser(data).subscribe((res) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Users Delete', life: 3000 });
          this.tableupdate();
        })
      }
    })
  }
  deleteSelectedusername(selecteddatas) {
    this.confirmationService.confirm({
      message: ' Are you sure you want to delete the selected users?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      // accept: () => {
      //   this.dataservice.deleteselectuser(selecteddatas).subscribe((res) => {
      //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Users Delete', life: 3000 });
      //     this.tableupdate();
      //   })
      // }
      accept: () => {
        for (let i = 0; i < this.selecteddatas.length; i++) {
          this.dataservice.deleteuser(selecteddatas[i]).subscribe(() => {

              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Users Delete', life: 3000 });
              this.tableupdate();
            
          })
        }



      }
    })
  }


  // deleteSelectedusername() {
  //   this.confirmationService.confirm({
  //     message: ' Are you sure you want to delete the selected users?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this
  //       this.products = this.products.filter(val => !this.selectedProducts.includes(val));
  //       this.selecteddatas = null;
  //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Users Deleted', life: 3000 });
  //     }
  //   })
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
