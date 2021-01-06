import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  display: boolean = true;
  displaylogin: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  togglemenu($event) {
    this.display = !this.display;
  }
  loginform($event) {
    this.displaylogin = !this.displaylogin;
  }

}
