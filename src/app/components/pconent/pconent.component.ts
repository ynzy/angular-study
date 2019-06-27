import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClinetService } from "../../services/common/http-clinet.service";

@Component({
  selector: 'app-pconent',
  templateUrl: './pconent.component.html',
  styleUrls: ['./pconent.component.scss']
})
export class PconentComponent implements OnInit {
  public imgUrl: string = ''
  public conent:any[] = []
  constructor(public route: ActivatedRoute, public http: HttpClinetService) {
    this.imgUrl = this.http.Host
  }

  ngOnInit() {
    this.route.params.subscribe((val: any) => {
      console.log(val)
      this.getConent(val.id);
    })
  }
  getConent(id) {
    this.http.get('api/productcontent?id=' + id).then((res: any) => {
      console.log(res.result[0])
      this.conent = res.result[0];
    })
  }
}
