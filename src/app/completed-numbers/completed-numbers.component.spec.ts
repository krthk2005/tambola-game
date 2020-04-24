import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedNumbersComponent } from './completed-numbers.component';

describe('CompletedNumbersComponent', () => {
  let component: CompletedNumbersComponent;
  let fixture: ComponentFixture<CompletedNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
