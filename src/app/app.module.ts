import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpClinetService } from "./services/common/http-clinet.service";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PconentComponent } from './components/pconent/pconent.component';

//上百个组件，会导致页面加载比较缓慢  所以要模块化
//引入自定义模块
import { UserModule } from './modules/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PconentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule
  ],
  providers: [HttpClinetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
