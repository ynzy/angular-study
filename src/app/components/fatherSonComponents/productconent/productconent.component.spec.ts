import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductconentComponent } from './productconent.component';

describe('ProductconentComponent', () => {
  let component: ProductconentComponent;
  let fixture: ComponentFixture<ProductconentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductconentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductconentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
