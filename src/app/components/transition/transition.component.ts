import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.less']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  handleToggleAside() {
    var asideDom:any = document.getElementById('aside')
    console.log(asideDom.style.transform)
    if(asideDom.style.transform == '' || asideDom.style.transform == 'translate(100%, 0px)') {
      asideDom.style.transform="translate(0,0)"
    } else {
      asideDom.style.transform="translate(100%,0)"
    }
    // console.log(asideDom.style.transform)
  }
}
