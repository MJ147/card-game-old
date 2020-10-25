import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignPlayerCardsComponent } from './foreign-player-cards.component';

describe('ForeignPlayerCardsComponent', () => {
  let component: ForeignPlayerCardsComponent;
  let fixture: ComponentFixture<ForeignPlayerCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignPlayerCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignPlayerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
