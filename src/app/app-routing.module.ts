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

import { NesteHomeComponent } from './components/Nestedrouting/neste-home/neste-home.component';
import { HomeWelcomeComponent } from './components/Nestedrouting/neste-home/home-welcome/home-welcome.component';
import { HomeSettingComponent } from './components/Nestedrouting/neste-home/home-setting/home-setting.component';
import { NesteproductComponent } from './components/Nestedrouting/nesteproduct/nesteproduct.component';
import { ProductPcateComponent } from './components/Nestedrouting/nesteproduct/product-pcate/product-pcate.component';
import { ProductPlistComponent } from './components/Nestedrouting/nesteproduct/product-plist/product-plist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nestehome',
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

  {
    path: 'nestehome', component: NesteHomeComponent,
    children: [
      { path: 'homeWelcome', component: HomeWelcomeComponent },
      { path: 'homeSetting', component: HomeSettingComponent },
      { path: '**', redirectTo: 'homeWelcome'}
    ]
  },
  {
    path: 'nesteproduct', component: NesteproductComponent,
    children: [
      { path: 'pcate', component: ProductPcateComponent },
      { path: 'plist', component: ProductPlistComponent },
      { path: '**', redirectTo: 'pcate'}

    ]
  },
  //匹配不到路由的时候加载的组件 或者跳转的路由
  {
    path: '**', /*任意的路由*/
    // component:HomeComponent
    redirectTo: 'nestehome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
