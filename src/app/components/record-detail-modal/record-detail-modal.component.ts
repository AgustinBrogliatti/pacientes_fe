import {Component, Input, OnInit} from '@angular/core';
import {MedicalRecord} from "../../model/MedicalRecord";
import {RecordService} from "../../services/record.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-record-detail-modal',
  templateUrl: './record-detail-modal.component.html',
  styleUrls: ['./record-detail-modal.component.css']
})
export class RecordDetailModalComponent implements OnInit {
  @Input() recordId!: number;
  record!: MedicalRecord;

  constructor(public activeModal: NgbActiveModal, private recordService: RecordService) {}

  ngOnInit(): void {
    if (this.recordId) {
      this.recordService.getRecordById(this.recordId).subscribe((data: MedicalRecord) => {
        this.record = data;
      });
    }
  }
}
