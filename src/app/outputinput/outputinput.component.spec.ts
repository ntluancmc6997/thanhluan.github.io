import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputinputComponent } from './outputinput.component';

describe('OutputinputComponent', () => {
  let component: OutputinputComponent;
  let fixture: ComponentFixture<OutputinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
