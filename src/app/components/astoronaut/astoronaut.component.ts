import { Component, OnInit, Input } from '@angular/core';
import { MissionService } from "../../services/mission.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-astoronaut',
  templateUrl: './astoronaut.component.html',
  styleUrls: ['./astoronaut.component.scss']
})
export class AstoronautComponent implements OnInit {
  @Input() astronaut: string;
  mission = '<没有消息发布>'
  confirmed = false;
  announced = false;
  subscription: Subscription;
  constructor(private missionService:MissionService) {
    this.subscription = missionService.missionAnnouncedSource$.subscribe(
      data => {
        console.log(data)
        this.mission = data;
        this.announced = true;
        this.confirmed = false;
      }
    )
  }
  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut)
  }

  ngOnInit() {
    this.subscription.unsubscribe;
  }

}
