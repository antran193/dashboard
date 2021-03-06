import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              },

            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Messages',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Message',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/messages'
          },
          {
            label: 'Toast',
            icon: 'pi pi-fw pi-align-right',
            routerLink: '/toast'
          },
        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',

          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Table',
        icon: 'pi pi-fw pi-table',
        routerLink: '/table'
      },
      {
        label: 'Galleria',
        icon: 'pi pi-fw pi-image',
        routerLink: '/galleria'
      },
      {
        label: 'Splitter',
        icon: 'pi pi-fw pi-image',
        routerLink: '/splitter'
      },
      {
        label: 'Cascadeselect',
        icon: 'pi pi-fw pi-image',
        routerLink: '/cascadeselect'
      },
      {
        label: 'Chart',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/chart'
      },
      {
        separator: true
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      },

    ];
  }

}
