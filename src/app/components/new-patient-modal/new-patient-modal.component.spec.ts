import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatientModalComponent } from './new-patient-modal.component';

describe('NewPatientModalComponent', () => {
  let component: NewPatientModalComponent;
  let fixture: ComponentFixture<NewPatientModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPatientModalComponent]
    });
    fixture = TestBed.createComponent(NewPatientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
