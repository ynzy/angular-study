import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter-child',
  templateUrl: './voter-child.component.html',
  styleUrls: ['./voter-child.component.scss']
})
export class VoterChildComponent implements OnInit {
  @Input() name:string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed:boolean) {
    this.voted.emit(agreed)
    this.didVote = true
  }

  constructor() { }

  ngOnInit() {
  }

}
