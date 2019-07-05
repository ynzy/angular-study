import { NgModule } from '@angular/core';
import { ZyComponent } from './zy.component';
import { HeaderComponent } from './header/header.component';

const USI = [
  HeaderComponent,
]

@NgModule({
  declarations: [ZyComponent, HeaderComponent],
  imports: [
  ],
  exports: [ZyComponent, ...USI]
}) 
export class ZyModule { }
