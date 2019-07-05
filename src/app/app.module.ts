import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZyModule } from "zy";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
