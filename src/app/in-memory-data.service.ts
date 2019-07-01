import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
      { id: 11, name: '盖伦' },
      { id: 12, name: '亚索' },
      { id: 13, name: '菲兹' },
      { id: 14, name: '剑圣' },
      { id: 15, name: '盲僧' },
      { id: 16, name: '孙悟空' },
      { id: 17, name: '石头人' },
      { id: 18, name: '提莫' },
      { id: 19, name: '后裔' },
      { id: 20, name: '蘑菇人' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  
}
