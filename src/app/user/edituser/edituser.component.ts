import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  //select框
  options= [
    { value: 'vip11', label: 'vip1' },
    { value: 'vip22', label: 'vip2' }
  
  ] 

  inputData:any={
    inputValue:'',
    age:''  ,
    sex:'0',
    checkOptions: [
      { label: 'php', value: 'php', checked: true },
      { label: 'java', value: 'java' },
      { label: 'h5', value: 'h5'  }
    ],
    vipcheckedOption:this.options[0],
    date:'',
    content: ''
  }
  constructor() { }

  ngOnInit() {
  }
  onChange(e:Date) {
    console.log(e)
    var date = new Date(e)
    console.log(date.getTime())
    // this.inputData.date = date.getTime();
  }
  handleSubmit() {
    console.log(this.inputData)
  }
}
