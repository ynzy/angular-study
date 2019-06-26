/*这个文件是Angular 根模块，告诉angular如何组装应用 */

//BrowserModule，浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
//Angular核心模块
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//引入并且配置服务
import { StorageService } from "./services//storage.service";
import { ViewChildComponent } from './components/view-child/view-child.component';
import { TransitionComponent } from './components/transition/transition.component';
import { Home1Component } from './components/fatherSonComponents/home1/home1.component';
import { Footer1Component } from './components/fatherSonComponents/footer1/footer1.component';
import { News1Component } from './components/fatherSonComponents/news1/news1.component';
import { Header1Component } from './components/fatherSonComponents/header1/header1.component';

/*@NgModule装饰器，@NgModule接受一个元数据对象，告诉Angular如何编译和启动应用*/
@NgModule({
  declarations: [ //配置当前项目运行的组件
    AppComponent, NewsComponent, HeaderComponent, HomeComponent, FormComponent, SearchComponent, TodoListComponent, ViewChildComponent, TransitionComponent, Home1Component, Footer1Component, News1Component, Header1Component
  ],
  imports: [  //配置当前模块运行依赖的其他模块
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService],  //配置项目所需要的服务
  bootstrap: [AppComponent] //指定应用的主视图(称为根组件) 通过引导根AppModule来启动应用
})
//根模块不需要导出任何东西， 因为其他组件不需要导入根模块
export class AppModule { }
