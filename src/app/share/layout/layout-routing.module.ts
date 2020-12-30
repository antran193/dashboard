import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourGuardGuard } from '../service/your-guard.guard';
import { CascadeselectComponent } from './menu/menucontent/cascadeselect/cascadeselect.component';
import { ChartComponent } from './menu/menucontent/chart/chart.component';
import { GalleriaautoComponent } from './menu/menucontent/galleriaauto/galleriaauto.component';
import { MessagesComponent } from './menu/menucontent/messages/messages.component';
import { SplitterComponent } from './menu/menucontent/splitter/splitter.component';
import { TableComponent } from './menu/menucontent/table/table.component';
import { YourguardComponent } from './menu/menucontent/yourguard/yourguard.component';

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
  path: '/test-guard',
  component: YourguardComponent,
  canActivate: [YourGuardGuard],
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
