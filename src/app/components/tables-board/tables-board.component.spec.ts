import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesBoardComponent } from './tables-board.component';

describe('TablesBoardComponent', () => {
  let component: TablesBoardComponent;
  let fixture: ComponentFixture<TablesBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
