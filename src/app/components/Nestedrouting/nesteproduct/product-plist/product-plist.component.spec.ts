import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPlistComponent } from './product-plist.component';

describe('ProductPlistComponent', () => {
  let component: ProductPlistComponent;
  let fixture: ComponentFixture<ProductPlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
