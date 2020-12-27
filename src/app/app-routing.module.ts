import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './share/layout/layout.component';



const routes : Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path : '', loadChildren:() => import('src/app/share/layout/layout.module').then(m => m.LayoutModule)
      }
    ]    
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
  
export class AppRoutingModule { }
