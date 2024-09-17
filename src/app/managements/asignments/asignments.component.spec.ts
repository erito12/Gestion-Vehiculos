import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignmentsComponent } from './asignments.component';

describe('AsignmentsComponent', () => {
  let component: AsignmentsComponent;
  let fixture: ComponentFixture<AsignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
