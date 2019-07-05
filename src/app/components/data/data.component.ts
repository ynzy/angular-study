import { Component, OnInit } from '@angular/core';
import { DataService } from "ynzy";
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.less']
})
export class DataComponent implements OnInit {

  constructor(private DataService:DataService) { }

  ngOnInit() {
    this.DataService.getData().subscribe(console.log);
  }

}
