import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceDownCardsComponent } from './face-down-cards.component';

describe('FaceDownCardsComponent', () => {
  let component: FaceDownCardsComponent;
  let fixture: ComponentFixture<FaceDownCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceDownCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceDownCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
