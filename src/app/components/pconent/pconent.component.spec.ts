import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PconentComponent } from './pconent.component';

describe('PconentComponent', () => {
  let component: PconentComponent;
  let fixture: ComponentFixture<PconentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PconentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PconentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
