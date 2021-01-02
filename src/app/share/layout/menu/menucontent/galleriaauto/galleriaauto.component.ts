import { Component, OnInit } from '@angular/core';
import { Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { PhotoserviceService } from 'src/app/share/service/photoservice.service';

@Component({
  selector: 'app-galleriaauto',
  templateUrl: './galleriaauto.component.html',
  styleUrls: ['./galleriaauto.component.css'],
  providers: [MessageService]
})
export class GalleriaautoComponent implements OnInit {

  images: any[];
  responsiveOptions: any[] = [
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
  constructor(private photoService: PhotoserviceService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.photoService.getImages().then(images => this.images = images)
    this.suc();

  }
  suc() {
    this.messageService.add({ key: 'suc', severity: 'success', summary: 'Success', detail: 'Load Image Success' });
  }

}
