import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxlistComponent } from './ajaxlist.component';

describe('AjaxlistComponent', () => {
  let component: AjaxlistComponent;
  let fixture: ComponentFixture<AjaxlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
