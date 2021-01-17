import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../service/authen/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  error ='adas';
  returnUrl: string;

  constructor(
    private loginservice: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,) { }
  
  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  sumit() {
    let data = {
      username: this.username,
      password: this.password
    }
    this.loginservice.login(data);

  }


}
