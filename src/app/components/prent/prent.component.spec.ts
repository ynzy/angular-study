import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrentComponent } from './prent.component';

describe('PrentComponent', () => {
  let component: PrentComponent;
  let fixture: ComponentFixture<PrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
