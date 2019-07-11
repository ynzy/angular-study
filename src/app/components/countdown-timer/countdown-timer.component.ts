import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  intervalId = 0;
  message = '';
  seconds = 11;

  clearTimer() { clearInterval(this.intervalId);}

  start() {this.countDown();}
  stop() {
    this.clearTimer();
    this.message = `停止在${this.seconds}秒`
  }
  private countDown() {
      this.clearTimer();
      this.intervalId = window.setInterval(()=>{
        this.seconds -= 1;
        if(this.seconds === 0) {
          this.message = '发射'
        } else {
          if(this.seconds < 0) {this.seconds = 10;}
          this.message = `倒计时${this.seconds}秒`
        }
      },1000)
  }

  constructor() { }

  ngOnInit() {
    this.start();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.clearTimer();
  }

}
