import { NgModule } from '@angular/core';
import { ZyComponent } from './zy.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { config,configService } from "./config/config";

const USI = [
  HeaderComponent,
]

@NgModule({
  declarations: [ZyComponent, HeaderComponent],
  imports: [
    HttpClientModule
  ],
  exports: [ZyComponent, ...USI]
}) 
export class ZyModule { 
  public static forRoot(config:config): ModuleWithProviders {
    return {
      ngModule: ZyModule,
      providers: [
        {
          provide: configService,
          useValue: config
        }
      ]
    }
  }
}
