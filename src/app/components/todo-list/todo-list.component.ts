import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  public keyWord:string;

  public todoList:any[]=[{
    title: '一条记录',
    status:0
  },{
    title: '一条记录',
    status:1
  }];
  constructor() { }

  ngOnInit() {
  }
  handleAdd(e) {
    if(e.keyCode==13) {
      // console.log(e)
      if(!this.todoListHasKeyWord(this.todoList,this.keyWord)) {
        this.todoList.push({
          title:this.keyWord,
          status:0  //0表示待办，1表示已完成
        })
      }else {
        alert('数据已经存在')
      }
      this.keyWord = ''
    }
  }
  deleteHistory(key) {
   this.todoList.splice(key,1)
  }
  //判断todoList中有的值和输入的值是否相同
  //如果数组里面有keyword返回true，否则返回false
  todoListHasKeyWord(todoList:any,keyWord:any) {
    //异步  会存在问题
    // todoList.forEach(val => {
    //   if(val.title==keyWord) {
    //     return true;
    //   }
    // });
    if(!keyWord) return false;
    for(var i=0;i<todoList.length;i++){
      if(todoList[i].title==keyWord){
        return true;
      }
    }
    return false
  }
}
