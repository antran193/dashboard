import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ResetpassService } from 'src/app/share/service/resetpass.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
  providers: [MessageService]
})
export class ResetpasswordComponent implements OnInit {
  password: string;
  repassword: string;
  msgs= [];
  constructor(private resetpass: ResetpassService, private router: Router, private messageService: MessageService ) { }

  ngOnInit(): void {
  }
  sumit() {
    let i = this.resetpass.uservaluerest;
    console.log(i);
    if (this.password == this.repassword) {
      i.password = this.password;
      this.resetpass.updatepass(i).subscribe((res) => {
        this.router.navigate(['/login'])
        this.msgs=[]
      })
    } else {
      this.msgs = [{ severity: 'error', summary: 'Error', detail: 'Password Incorrect' }];
    }
  }

}
