import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { VipComponent } from './user/vip/vip.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { HomeComponent } from './home/home.component';
import { AjaxlistComponent } from './user/ajaxlist/ajaxlist.component';
import { CropperComponent } from './item/cropper/cropper.component';
import { ItemComponent } from './item/item.component';
import { ImageCropperModule } from 'ngx-image-cropper';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    VipComponent,
    AdduserComponent,
    EdituserComponent,
    UserComponent,
    HomeComponent,
    AjaxlistComponent,
    CropperComponent,
    ItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    ImageCropperModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
