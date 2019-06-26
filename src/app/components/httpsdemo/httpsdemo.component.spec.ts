import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpsdemoComponent } from './httpsdemo.component';

describe('HttpsdemoComponent', () => {
  let component: HttpsdemoComponent;
  let fixture: ComponentFixture<HttpsdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpsdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
