import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YufanModule } from "yufan";
// import { DataService } from "ynzy";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YufanModule.forRoot({
      dataUrl: `https://jsonplaceholder.typicode.com/todos/1`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
