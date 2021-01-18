import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetpassService {
  private userSubject: BehaviorSubject<any>;
  public user : Observable<any>
  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<any>(JSON);
    this.user = this.userSubject.asObservable();
  }
  public get uservaluerest() {
    return this.userSubject.value;
  }
  
  getuser() {
    return this.http.get('https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable');
  }
  updatepass(newpass) {
    return this.http.put('https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable/'+ newpass.index, newpass)
  }
  getuservalue(a) {
    debugger;
    this.userSubject.next(a);
    this.router.navigate(['/resetpassword'])
  }
  
}
