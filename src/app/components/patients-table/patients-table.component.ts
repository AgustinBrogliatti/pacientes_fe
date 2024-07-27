import { Component, OnInit } from '@angular/core';
import {RecordService} from "../../services/record.service";
import {RecordPreview} from "../../model/RecordPreview";
import { RecordDetailModalComponent } from '../record-detail-modal/record-detail-modal.component';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {StoreService} from "../../services/store.service";
import {RoomService} from "../../services/room.service";
import {MedicalRecord} from "../../model/MedicalRecord";

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


  constructor(private recordService:RecordService, private modalService: NgbModal, private storeService:StoreService, private roomService:RoomService) {}


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

  addToLine(record: any) {
    const roomId = this.storeService.getRoom()?.id;
    this.roomService.addToLine(record.patientDni, roomId!).subscribe(
      (data) => {
        this.storeService.triggerRefresh();
      }
    );
  }


}
