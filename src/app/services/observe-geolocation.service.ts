import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserveGeolocationService {

  constructor() { }

  
}
const locations = new Observable((observer) => {
  const {next, error} = observer;
  let watchId;

  if('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition(next, error);
  } else {
    error('Geolocation not available');
  }

  return {unsubscribe() {
    navigator.geolocation.clearWatch(watchId)
  }}
});

const locationsSubscription = locations.subscribe({
  next(position) {console.log('Current Position', position);},
  error(msg) {console.log('Error Getting Location:', msg)}
});

setTimeout(() => {locationsSubscription.unsubscribe();},10000)

function sequenceSubscriber(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();

  return {unsubscribe() {}}
}

const sequence = new Observable(sequenceSubscriber)

sequence.subscribe({
  next(num) {console.log(num)},
  complete() {console.log('finished sequence')}
})

function fromEvent(target, eventName) {
  return new Observable((observer) => {
    const handler = (e) => observer.next(e)
    target.addEventListener(eventName, handler)
    return ()=> {
      target.removeEventListener(eventName, handler)
    }
  })
}