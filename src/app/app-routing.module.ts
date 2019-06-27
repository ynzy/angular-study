import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PconentComponent } from './components/pconent/pconent.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'pconent/:id',component:PconentComponent},
  {path: '**',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
