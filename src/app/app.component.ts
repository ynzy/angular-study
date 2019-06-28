import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  triggerTemplate: TemplateRef<void> | null = null;
  @ViewChild('trigger',{static:false}) customTrigger: TemplateRef<void>;
  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}
