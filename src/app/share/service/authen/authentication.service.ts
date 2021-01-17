import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;
  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get uservalue() {
    return this.userSubject.value;
  }
  // :Observable<boolean>
  login(e) {
    return this.http.post('users/authenticate', e).subscribe(res => {
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res));
      this.userSubject.next(res);
      // return res;
      this.router.navigate(['/'])
      return true;
    },
      error => {
        alert('asd')
      }
    )
  }
}

