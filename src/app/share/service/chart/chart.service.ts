import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  // private boolenDisco = new BehaviorSubject<boolean>(false);
  // public boolen: Observable<any>;
  private aSuject: BehaviorSubject<any>;
  private bSuject: BehaviorSubject<any>;
  private cSuject: BehaviorSubject<any>;
  public aos: Observable<any>;
  public bos: Observable<any>;
  public cos: Observable<any>;
  constructor(private http: HttpClient) {
    this.aSuject = new BehaviorSubject<any>(JSON);
    this.bSuject = new BehaviorSubject<any>(JSON);
    this.cSuject = new BehaviorSubject<any>(JSON);
    // this.boolenDisco = new BehaviorSubject<boolean>(false);
    this.aos = this.aSuject.asObservable();
    this.bos = this.bSuject.asObservable();
    this.cos = this.cSuject.asObservable();
    // this.boolen = this.boolenDisco.asObservable();
  }
  // public get valueBoolen() {
  //   return this.boolenDisco.value;
  // }
  public isBoolen = new BehaviorSubject<boolean>(false);
  cast = this.isBoolen.asObservable();

  public get valueASubject() {
    return this.aSuject.value;
  }
  public get valueBSubject() {
    return this.bSuject.value;
  }
  public get valueCSubject() {
    return this.cSuject.value;
  }
  getdata() {
    return this.http.get('https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable');
  }
  getdatachart(a,b,c) {
    this.aSuject.next(a);
    this.bSuject.next(b);
    this.cSuject.next(c);
  }
  changeBoolenDisco() {
    this.isBoolen.next(!this.isBoolen.value);
  }

}
