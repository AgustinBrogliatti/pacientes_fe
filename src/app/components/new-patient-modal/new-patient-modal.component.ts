import {Component, Input, OnInit} from '@angular/core';
import {MedicalRecord} from "../../model/MedicalRecord";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {RecordService} from "../../services/record.service";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../model/Patient";

@Component({
  selector: 'app-new-patient-modal',
  templateUrl: './new-patient-modal.component.html',
  styleUrls: ['./new-patient-modal.component.css']
})
export class NewPatientModalComponent {
  record: MedicalRecord;

  constructor(
    public activeModal: NgbActiveModal,
    private recordService: RecordService
  ) {
    // Inicializar el objeto record con datos vacíos
    this.record = new MedicalRecord(
      new Patient(0, '', '', '', '', '', ''),
      1,
      '',
      '',
      '',
      ''
    );
  }

  createPatient(): void {
    console.log(this.record); // Verifica el objeto en la consola
    this.recordService.createRecord(this.record).subscribe((data: MedicalRecord) => {
      this.activeModal.close(data);
    });
  }
}
