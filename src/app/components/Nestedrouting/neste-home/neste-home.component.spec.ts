import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NesteHomeComponent } from './neste-home.component';

describe('NesteHomeComponent', () => {
  let component: NesteHomeComponent;
  let fixture: ComponentFixture<NesteHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NesteHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NesteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
