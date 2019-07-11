import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.scss']
})
export class VersionChildComponent implements OnInit {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    let log: string[] = [];
    // console.log(changes)
    for (let propName in changes) {
      // console.log(propName)
      let changeProp = changes[propName];
      // console.log(changeProp.currentValue)
      // console.log(changeProp.previousValue)
      let to = JSON.stringify(changeProp.currentValue)
      if(changeProp.isFirstChange()) {
        log.push(`数据改变名字:${propName},改变成的值:${to}`)
      } else {
        let from = JSON.stringify(changeProp.previousValue)
        log.push(`${propName}的改变,从${from}变成${to}`)
      }
    }
    this.changeLog.push(log.join('--'))
    
  }

}
