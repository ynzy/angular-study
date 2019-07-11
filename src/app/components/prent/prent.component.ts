import { Component, OnInit, ViewChild } from '@angular/core';
import { AdItem } from '../ad-banner/ad-item';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-prent',
  templateUrl: './prent.component.html',
  styleUrls: ['./prent.component.scss']
})
export class PrentComponent implements OnInit {
  names:any[]= ['张三','','李四']
  major = 1;
  minor = 23;
  newMinor() {
    this.minor++
  }
  newMajor() {
    this.major++;
    this.minor = 0
  }

  agreed:number = 0;
  disagreed:number = 0;
  voters:string[] = ['narco','disked','boombasto','cleark']
  onVoted(agreed:boolean) {
    console.log(agreed)
    agreed ? this.agreed++ : this.disagreed++;
  }
  
  seconds() {return 0;}
  @ViewChild('timer',{static:false})tiemr:any
  start() {
    this.tiemr.start();
  }
  stop() {
    this.tiemr.stop()
  }
  
  ads:AdItem[];

  constructor(private adService:AdService) { }

  color = 'yellow'
  violet = ""

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => { this.seconds = ()=> this.tiemr.seconds}, 0);
    // setTimeout(() => this.seconds = () => this.tiemr.seconds, 0);
  }
}
