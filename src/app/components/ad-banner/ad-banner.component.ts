import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdItem } from './ad-item'
import { AdDirective } from 'src/app/directives/ad.directive';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit {
  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective,{static:true}) adHost:AdDirective;
  interval:any;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { 

  }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }
  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component)
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data
  }
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    },3000)
  }
}
