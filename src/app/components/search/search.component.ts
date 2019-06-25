import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  public keyWord:string;
  public historyList:any[]=['手机','电脑','苹果',];
  constructor() { }

  ngOnInit() {
  }
  handleSearch() {
    //判断输入的值是否存在
    //TODO: indexOf()，如果检索的字符串没有出现，则返回-1
    if(this.historyList.indexOf(this.keyWord)==-1) {
      this.historyList.push(this.keyWord);
    }
    this.keyWord=''
    // console.log(this.keyWord)
  }
  deleteHistory(key) {
    this.historyList.splice(key,1)
  }
}
