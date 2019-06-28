import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { VipComponent } from './user/vip/vip.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { AjaxlistComponent } from './user/ajaxlist/ajaxlist.component';


const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'list', component: UserlistComponent },
      { path: 'ajaxlist', component: AjaxlistComponent },
      { path: 'vip', component: VipComponent },
      { path: 'add', component: AdduserComponent },
      { path: 'edit', component: EdituserComponent },
      { path: '**', redirectTo: 'list'}
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
