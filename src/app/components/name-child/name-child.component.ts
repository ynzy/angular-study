import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.scss']
})
export class NameChildComponent implements OnInit {
  private _name = ''
  @Input()
  set name (name:string) {
    this._name = (name && name.trim()) || '<没有名字>'
  }
  get name ():string {return this._name+','}
  
  constructor() { }

  ngOnInit() {
  }

}
