import { Component, OnInit } from '@angular/core';
import {RecordService} from "../../services/record.service";
import {RecordPreview} from "../../model/RecordPreview";
import { RecordDetailModalComponent } from '../record-detail-modal/record-detail-modal.component';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.css']
})
export class PatientsTableComponent implements OnInit {
  search = '';
  records: RecordPreview[] = [];

  filterSelected = { title: 'DNI', key: 'dni' };
  filterOptions = [
    { title: 'DNI', key: 'dni' },
    { title: 'Apellido', key: 'lastname' },
  ];


  constructor(private recordService:RecordService, private modalService: NgbModal) {}


  ngOnInit(): void {
    this.recordService.getAllRecords().subscribe(
      (data) => {
        this.records = data
      }
    )
  }

  searchUser() {
    // Lógica para buscar patients
  }

  selectFilter(option: any) {
    this.filterSelected = option;
  }

  openRecord(id: number) {
    const modalRef = this.modalService.open(RecordDetailModalComponent, { centered: true });
    modalRef.componentInstance.recordId = id;
  }

  addToLine(paciente: any) {
    // Lógica para añadir paciente a la fila de espera
  }


}
