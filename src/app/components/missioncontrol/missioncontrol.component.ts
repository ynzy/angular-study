import { Component, OnInit } from '@angular/core';

import { MissionService } from "../../services/mission.service";

@Component({
  selector: 'app-missioncontrol',
  templateUrl: './missioncontrol.component.html',
  styleUrls: ['./missioncontrol.component.scss'],
  providers: [MissionService]  //设置组件及其子组件可用的服务
})
export class MissioncontrolComponent implements OnInit {

  astronauts = ['爱','你','呦']
  history:string[] = [];
  missions = ['飞到月亮上','飞到太阳上','飞到天空上']
  nextMission = 0;

  constructor(private missionService:MissionService) { 
    missionService.missionConfirmedSource$.subscribe(
      astronauts =>{
        this.history.push(`${astronauts} 确认的消息`)
    })
  }

  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`消息 ${mission} 被发布`)
    if(this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }


  ngOnInit() {
  }

}
