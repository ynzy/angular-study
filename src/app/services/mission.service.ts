import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  missionAnnouncedSource$ = this.missionAnnouncedSource.asObservable();
  missionConfirmedSource$ = this.missionConfirmedSource.asObservable();

  announceMission(mission:string) {
    this.missionAnnouncedSource.next(mission)
  }

  confirmMission(astronaut:string) {
    this.missionConfirmedSource.next(astronaut)
  }
  constructor() { }
}
