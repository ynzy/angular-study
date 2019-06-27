import { Component, OnInit } from '@angular/core';

import { HttpClinetService } from "../../services/common/http-clinet.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imgUrl:string = ''
  public list:any[]=[]
  constructor(public http:HttpClinetService) { 
    this.imgUrl = this.http.Host
  }
  ngOnInit() {
    this.http.get('api/productlist').then((res:any)=> {
      console.log(res)
      this.list=res.result;
    })
  }

}
