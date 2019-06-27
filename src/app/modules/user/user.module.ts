import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonService } from "./services/common.service";

import { ProfileComponent } from './components/profile/profile.component';
import { AddressComponent } from './components/address/address.component';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './user.component';

@NgModule({
  //user模块的组件
  declarations: [ProfileComponent, AddressComponent, OrderComponent, UserComponent],
  //暴露组件，让其他模块里面可以使用
  exports: [UserComponent,AddressComponent],
  providers: [CommonService],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
