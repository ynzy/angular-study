import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPcateComponent } from './product-pcate.component';

describe('ProductPcateComponent', () => {
  let component: ProductPcateComponent;
  let fixture: ComponentFixture<ProductPcateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPcateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
