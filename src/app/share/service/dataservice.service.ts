import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }
  getdata(){
    return this.http.get('https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable');
  }
  postdata(data) {
    return this.http.post('https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable', data);
  }
  updatedata(dataupdate) {
    return this.http.put('https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable/'+ dataupdate.index ,dataupdate);
  }
  deleteuser(datadelete)
  {
    return this.http.delete('https://5f6599069385b80016c5f7d2.mockapi.io/api/login/usertable/'+ datadelete.index)
  }
}
