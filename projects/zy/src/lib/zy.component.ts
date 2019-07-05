import { Component, OnInit } from '@angular/core';
import { DataService } from "./services/data.service";
@Component({
  selector: 'zy-zy',
  template: `
    <p>
      这是我创建的一个库
    </p>
  `,
  styles: []
})
export class ZyComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(console.log);
  }

}
