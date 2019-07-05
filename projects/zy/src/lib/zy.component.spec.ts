import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZyComponent } from './zy.component';

describe('ZyComponent', () => {
  let component: ZyComponent;
  let fixture: ComponentFixture<ZyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
