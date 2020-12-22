import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../layout/menu/menucontent/galleriaauto/image';

@Injectable({
  providedIn: 'root'
})
export class PhotoserviceService {

  constructor(private http: HttpClient) { }
  getImages() {
    return this.http.get<any>('assets/datajson/photo.json').toPromise().then(res => <Image[]>res.data).then(data => { return data; });
  }
}
