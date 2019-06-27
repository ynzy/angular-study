import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NesteproductComponent } from './nesteproduct.component';

describe('NesteproductComponent', () => {
  let component: NesteproductComponent;
  let fixture: ComponentFixture<NesteproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NesteproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NesteproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
