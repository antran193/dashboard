import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './share/layout/login/forgetpassword/forgetpassword.component';
import { LayoutComponent } from './share/layout/layout.component';
import { LoginComponent } from './share/layout/login/login/login.component';
import { Guard } from './share/service/authen/authen.guard';
import { ResetpassService } from './share/service/resetpass.service';
import { ResetpasswordComponent } from './share/layout/login/resetpassword/resetpassword.component';
import { ResetpassGuard } from './share/service/resetpass.guard';



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
  {
    path: 'forgetpassword', component: ForgetpasswordComponent
  },
  {
    path: 'resetpassword', component: ResetpasswordComponent , canActivate : [ResetpassGuard]
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
