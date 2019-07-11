import { Injectable } from '@angular/core';
import { AdItem } from '../components/ad-banner/ad-item';
import { HeroProfileComponent } from '../components/hero-profile/hero-profile.component';
import { HeroJobAdComponent } from '../components/hero-job-ad/hero-job-ad.component';



@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: '战三', bio: '欢迎你的到来'}),

      new AdItem(HeroProfileComponent, {name: '李四', bio: '你到来的很是时候'}),

      new AdItem(HeroJobAdComponent,   {headline: '这是一个好的一天',
                                        body: '内容:庆祝今天的日子!'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}