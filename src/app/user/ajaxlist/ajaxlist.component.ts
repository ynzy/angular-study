import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-ajaxlist',
  templateUrl: './ajaxlist.component.html',
  styleUrls: ['./ajaxlist.component.scss']
})
export class AjaxlistComponent implements OnInit {
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfAllData: Data[] = [];
  loading = true;

  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  listOfDisplayData: Data[] = [];
  
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  constructor(public http:HttpClient) { }
  currentPageDataChange($event: Data[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfAllData.filter(item => this.mapOfCheckedId[item.id]).length;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  operateData(): void {
    this.isOperating = true;
    setTimeout(() => {
      this.listOfAllData.forEach(item => (this.mapOfCheckedId[item.id] = false));
      this.refreshStatus();
      this.isOperating = false;
    }, 1000);
  }
  searchData(reset: boolean = false) {
    if(reset) {
      this.pageIndex = 1;
    }
    var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.pageIndex;    
    this.loading = true
    this.http.get(api).subscribe((res:any) => {
      this.loading = false;
      console.log(res)
      this.listOfAllData = res.result
    })
  }
  ngOnInit() {
    this.searchData()
    // for (let i = 0; i < 50; i++) {
    //   this.listOfAllData.push({
    //     id: i,
    //     name: `Edward King ${i}`,
    //     age: 32,
    //     address: `London, Park Lane no. ${i}`
    //   });
    // }
  }

}
