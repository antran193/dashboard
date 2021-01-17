import { Component, OnInit } from '@angular/core';
import { ResetpassService } from 'src/app/share/service/resetpass.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  password: string;
  repassword: string;
  
  constructor(private resetpass : ResetpassService) { }

  ngOnInit(): void {
  }
  sumit() {
    let i = this.resetpass.uservaluerest;
    console.log(i);
  }

}
