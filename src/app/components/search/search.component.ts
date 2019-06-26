/*
  1.ng g service services/storage
  2.app.module.ts 里面引入创建的服务，并且声明
    import { StorageService } from "./services//storage.service";
    providers: [StorageService], 
  3.在用到的组件里面
    引入服务
    import { StorageService } from "../../services//storage.service";
    初始化
    constructor(public storage:StorageService) {
      let s = this.storage.get()
      console.log(s)
    }
*/
import { Component, OnInit } from '@angular/core';
//引入服务
import { StorageService } from "../../services//storage.service";
// !不推荐
// var storage = new StorageService();
// console.log(storage)
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  public keyWord:string;
  public historyList:any[]=[
    // '手机','电脑','苹果',
  ];
  constructor(public storage:StorageService) {
    // let s = this.storage.get()
    // console.log(s)
  }

  ngOnInit() {
    // console.log('页面刷新会触发这个生命周期函数')
    var searchlist = this.storage.get('searchlist');
    if(searchlist){
      this.historyList = searchlist;
    }

  }
  handleSearch() {
    //判断输入的值是否存在
    //TODO: indexOf()，如果检索的字符串没有出现，则返回-1
    if(this.historyList.indexOf(this.keyWord)==-1) {
      this.historyList.push(this.keyWord);
      this.storage.set('searchlist',this.historyList);
    }
    this.keyWord=''
    // console.log(this.keyWord)
  }
  deleteHistory(key) {
    this.historyList.splice(key,1)
    this.storage.set('searchlist',this.historyList);
  }
}
