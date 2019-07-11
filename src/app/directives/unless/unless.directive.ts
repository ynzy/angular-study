import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


// UnlessDirective 的结构型指令，它是 NgIf 的反义词。 NgIf 在条件为 true 的时候显示模板内容，而 UnlessDirective 则会在条件为 false 时显示模板内容。
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView=false;
  @Input() 
  set appUnless(condition: boolean) {
    if(!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
