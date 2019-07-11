import { Component, Input }  from '@angular/core';
import { AdComponent } from '../ad-banner/ad.component';


@Component({
  template: `
    <div class="hero-profile">
      <h3>英雄个人</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>这个英雄很火!</strong>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}