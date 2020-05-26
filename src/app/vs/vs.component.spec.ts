import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSComponent } from './vs.component';

describe('VSComponent', () => {
  let component: VSComponent;
  let fixture: ComponentFixture<VSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
