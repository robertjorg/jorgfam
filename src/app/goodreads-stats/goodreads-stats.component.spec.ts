import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodreadsStatsComponent } from './goodreads-stats.component';

describe('GoodreadsStatsComponent', () => {
  let component: GoodreadsStatsComponent;
  let fixture: ComponentFixture<GoodreadsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodreadsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodreadsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
