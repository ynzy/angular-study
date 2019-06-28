import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  listOfSelection = [
    {
      text: '选择所有行',
      onSelect: () => {
        this.checkAll(true);
      }
    },
    {
      text: '选择偶数行',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 !== 0));
        this.refreshStatus();
      }
    },
    {
      text: '选择单数行',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 === 0));
        this.refreshStatus();
      }
    }
  ];
  isAllDisplayDataChecked = false;  //是否全选
  isIndeterminate = false;  //选中的状态
  listOfDisplayData: any[] = []; //显示的数据
  listOfAllData: any[] = [];  //所有数据
  mapOfCheckedId: { [key: string]: boolean } = {};  //每行是否选中的状态

  constructor() { }
  currentPageDataChange($event: Array<{ id: number; name: string; age: number; address: string }>): void {
    // console.log($event)
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }
  //刷新状态，判断是否全部选中，和部分选中状态
  refreshStatus(): void {
    // console.log(this.isAllDisplayDataChecked)
    /*
      every() 方法使用指定函数检测数组中的所有元素：
      如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
      如果所有元素都满足条件，则返回 true。
      some() 方法会依次执行数组的每个元素：
      如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
      如果没有满足条件的元素，则返回false。
    */
    this.isAllDisplayDataChecked = this.listOfDisplayData.every((item) => {
      this.mapOfCheckedId[item.id]
    });
    this.isIndeterminate =
      this.listOfDisplayData.some((item) => { 
        // console.log(this.mapOfCheckedId[item.id])
        this.mapOfCheckedId[item.id] 
      }) && !this.isAllDisplayDataChecked;
  }
  //全选和反选
  checkAll(value: boolean): void {
    // console.log(value)
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfAllData.push({
        id: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
      });
    }
  }

}
