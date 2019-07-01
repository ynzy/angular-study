# 英勇指南
* 案例来自angular官网demo实例
* https://www.angular.cn/tutorial
## 学习内容
* 使用`管道`UppercasePipe 格式化英雄名字全部大写
* AppModule引入`FormsModule`，使用ngModel指令实现双向数据绑定
* 使用`*ngFor`显示一个列表
* 使用`*ngIf`来根据条件包含或者排除一段html
* 使用`class绑定`切换css样式
* 使用`属性绑定`语法来让父组件控制子组件
* 使用` @Input 装饰器`让属性可以在外部绑定
* 给 HeroService 中获取数据的方法提供了一个异步的函数签名。
* 使用 RxJS 的 of() 方法返回了一个模拟英雄数据的可观察对象 (Observable<Hero[]>)。
* 创建了一个 MessageService，以便在类之间实现松耦合通讯。
* HeroService 连同注入到它的服务 MessageService 一起，注入到了组件中。
* 添加了 Angular 路由器在各个不同组件之间导航。
* 使用一些 <a> 链接和一个 <router-outlet> 把 AppComponent 转换成了一个导航用的壳组件。
* 定义了一些简单路由、一个重定向路由和一个参数化路由。
* 在多个组件之间共享了 HeroService 服务。
* 重构了 HeroService，以通过 web API 来加载英雄数据。
* 扩展了 HeroService 来支持 post()、put() 和 delete() 方法。
* 修改了组件，以允许用户添加、编辑和删除英雄。
* 配置了一个内存 Web API。
* 使用“可观察对象”。