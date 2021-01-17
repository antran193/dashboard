import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CalendarComponent } from './menu/menucontent/calendar/calendar.component';
import { CascadeselectComponent } from './menu/menucontent/cascadeselect/cascadeselect.component';
import { ChartComponent } from './menu/menucontent/chart/chart.component';
import { GalleriaautoComponent } from './menu/menucontent/galleriaauto/galleriaauto.component';
import { MessagesComponent } from './menu/menucontent/messages/messages.component';
import { SplitterComponent } from './menu/menucontent/splitter/splitter.component';
import { TableComponent } from './menu/menucontent/table/table.component';
import { ToastComponent } from './menu/menucontent/toast/toast.component';


const routes: Routes = [{
  path: 'galleria', component: GalleriaautoComponent
},
{
  path: 'table', component: TableComponent
},
{
  path: 'splitter', component: SplitterComponent
},
{
  path: 'cascadeselect', component: CascadeselectComponent
},
{
  path: 'chart', component: ChartComponent
},
{
  path: 'messages', component: MessagesComponent
},
{
  path: 'toast', component: ToastComponent
},
{
  path: 'calendar', component: CalendarComponent
},

// {
//   path: '/login', component: LoginComponent, children: [
//     {
//       path: '', loadChildren: () => import('src/app/login/login.module').then(m => m.LoginModule)
//     }
//   ]
// }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
