import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMisionesComponent } from './card-misiones.component';

describe('CardMisionesComponent', () => {
  let component: CardMisionesComponent;
  let fixture: ComponentFixture<CardMisionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMisionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
