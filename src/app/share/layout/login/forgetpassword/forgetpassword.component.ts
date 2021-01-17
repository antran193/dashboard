import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ResetpassService } from '../../../service/resetpass.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
  providers: [MessageService]
})
export class ForgetpasswordComponent implements OnInit {
  username: string = '';
  msgs = [];
  returnUrl: string;
  constructor(private messageService: MessageService,private resetpassService : ResetpassService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/forgetpassword';
  }
  confirmuser() {
    this.resetpassService.getuser().subscribe((res) => {
      this.authen(res);
    })
  }
  authen(res) {
    // debugger;
    for (let i = 0; i < res.length; i++) {
      // console.log(res[i].username);
      if (res[i].username == this.username) {
        console.log(res[i]);
        this.resetpassService.getuservalue(res[i]);
        
        this.msgs = [];
        break;
      }
      else {
        this.msgs = [{ severity: 'error', summary: 'Error', detail: 'User does not exist' }];
      }
    }
  }
}
