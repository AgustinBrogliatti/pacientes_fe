import {Component, Input, OnInit} from '@angular/core';
import {MedicalRecord} from "../../model/MedicalRecord";
import {RecordService} from "../../services/record.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../model/Patient";

@Component({
  selector: 'app-record-detail-modal',
  templateUrl: './record-detail-modal.component.html',
  styleUrls: ['./record-detail-modal.component.css']
})
export class RecordDetailModalComponent implements OnInit {
  @Input() recordId!: number;
  record!: MedicalRecord;
  isEditing: boolean = false;

  constructor(public activeModal: NgbActiveModal, private recordService: RecordService, private patientService: PatientService) {}

  ngOnInit(): void {
    if (this.recordId) {
      this.recordService.getRecordById(this.recordId).subscribe((data: MedicalRecord) => {
        this.record = data;
      });
    }
  }


  editPatient() {
    this.isEditing = true;
  }

    updatePatient(): void {
      if (this.recordId && this.isEditing) {
        this.patientService.updatePatient(this.recordId, this.record.patient).subscribe((data: Patient) => {
          this.isEditing = false;
          this.record.patient = data;
        });
      }
    }
}
