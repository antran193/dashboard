import { Component, OnInit } from '@angular/core';
import { Message, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  providers: [MessageService]
})
export class MessagesComponent implements OnInit {
  msgs1: Message[];
  msgs2: Message[];
  msgs3: Message[];
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.msgs1 = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
      { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Message Content' },
      { severity: 'custom', summary: 'Custom', detail: 'Message Content', icon: 'pi-file' }
    ];
    this.msgs3 = [
      { severity: 'success', summary: 'Success', detail: 'Hello An Dien' },
    ];
    setTimeout(() => {
      this.msgs3=[];
    }, 1000);
  }
  addMessages() {
    this.msgs2 = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
      { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Message Content' }
    ];
  }
  clearMessages() {
    this.msgs2 = [];
  }

  showViaService() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

}
