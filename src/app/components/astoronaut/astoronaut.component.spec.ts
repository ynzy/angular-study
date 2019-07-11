import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstoronautComponent } from './astoronaut.component';

describe('AstoronautComponent', () => {
  let component: AstoronautComponent;
  let fixture: ComponentFixture<AstoronautComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstoronautComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstoronautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
