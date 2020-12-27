import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CascadeselectComponent } from './menu/menucontent/cascadeselect/cascadeselect.component';
import { GalleriaautoComponent } from './menu/menucontent/galleriaauto/galleriaauto.component';
import { SplitterComponent } from './menu/menucontent/splitter/splitter.component';
import { TableComponent } from './menu/menucontent/table/table.component';

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
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
