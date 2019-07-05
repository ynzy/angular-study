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
    ZyModule.forRoot({
      dataUrl: `https://jsonplaceholder.typicode.com/todos/1`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
