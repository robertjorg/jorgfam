import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterCountainerComponent } from './outer-countainer.component';

describe('OuterCountainerComponent', () => {
  let component: OuterCountainerComponent;
  let fixture: ComponentFixture<OuterCountainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterCountainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterCountainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
