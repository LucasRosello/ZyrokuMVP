import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetearPasswordComponent } from './resetear-password.component';

describe('ResetearPasswordComponent', () => {
  let component: ResetearPasswordComponent;
  let fixture: ComponentFixture<ResetearPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetearPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetearPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
