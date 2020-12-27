import { Component, OnInit } from '@angular/core';

import { PhotoserviceService } from 'src/app/share/service/photoservice.service';

@Component({
  selector: 'app-galleriaauto',
  templateUrl: './galleriaauto.component.html',
  styleUrls: ['./galleriaauto.component.css']
})
export class GalleriaautoComponent implements OnInit {
  images: any[];

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  constructor(private photoService: PhotoserviceService) { }

  ngOnInit(): void {
    this.photoService.getImages().then(images => this.images = images)
  }

}
