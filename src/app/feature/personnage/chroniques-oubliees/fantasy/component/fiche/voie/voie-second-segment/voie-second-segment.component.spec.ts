import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoieSecondSegmentComponent } from './voie-second-segment.component';

describe('VoieSecondSegmentComponent', () => {
  let component: VoieSecondSegmentComponent;
  let fixture: ComponentFixture<VoieSecondSegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoieSecondSegmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoieSecondSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
