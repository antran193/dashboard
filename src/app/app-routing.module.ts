import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './share/layout/layout.component';
import { LoginComponent } from './share/layout/login/login.component';
import { Guard } from './share/service/authen/authen.guard';



const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate : [Guard], children: [
      {
        path: '', loadChildren: () => import('src/app/share/layout/layout.module').then(m => m.LayoutModule)
      }
    ]
  },
  {
    path: 'login', component: LoginComponent
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
