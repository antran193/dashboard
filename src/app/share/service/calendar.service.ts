import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>('/assets/calendarjson/calendar.json').toPromise().then(res => <any[]>res.json().data).then(data => { return data; });
    }
}
