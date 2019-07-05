import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZyModule } from "ynzy";
import { DataService } from "ynzy";

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
    ZyModule.forRoot({
      dataUrl: `https://jsonplaceholder.typicode.com/todos/1`
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
