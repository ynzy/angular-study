//配置路由模块
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/fatherSonComponents/main/main.component';
import { Home1Component } from './components/fatherSonComponents/home1/home1.component';
import { Footer1Component } from './components/fatherSonComponents/footer1/footer1.component';
import { News1Component } from './components/fatherSonComponents/news1/news1.component';
import { Header1Component } from './components/fatherSonComponents/header1/header1.component';
import { ProductComponent } from './components/fatherSonComponents/product/product.component';
import { NewscontentComponent } from './components/fatherSonComponents/newscontent/newscontent.component';
import { ProductconentComponent } from './components/fatherSonComponents/productconent/productconent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: 'home', component: Home1Component },
      { path: 'news', component: News1Component },
      { path: 'product', component: ProductComponent },
    ]
  },
  { path: 'newcontent/:aid', component: NewscontentComponent },
  { path: 'productcontent/:pid', component: ProductconentComponent },

  //匹配不到路由的时候加载的组件 或者跳转的路由
  {
    path: '**', /*任意的路由*/
    // component:HomeComponent
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
