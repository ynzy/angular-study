import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpClinetService } from "./services/common/http-clinet.service";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PconentComponent } from './components/pconent/pconent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PconentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClinetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
