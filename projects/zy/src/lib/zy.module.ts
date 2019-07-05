import { NgModule } from '@angular/core';
import { ZyComponent } from './zy.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ZyComponent, HeaderComponent],
  imports: [
  ],
  exports: [ZyComponent]
})
export class ZyModule { }
