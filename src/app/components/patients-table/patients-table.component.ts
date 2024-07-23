import { Component, OnInit } from '@angular/core';
import {RecordService} from "../../services/record.service";
import {MedicalRecord} from "../../model/MedicalRecord";

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.css']
})
export class PatientsTableComponent implements OnInit {
  search = '';
  records: MedicalRecord[] = [];

  filterSelected = { title: 'DNI', key: 'dni' };
  filterOptions = [
    { title: 'DNI', key: 'dni' },
    { title: 'Apellido', key: 'lastname' },
  ];


  constructor(private recordService:RecordService) {}


  ngOnInit(): void {
    this.recordService.getAllRecords().subscribe(
      (data) => {
        console.log(data);
        this.records = data
      }
    )
  }
  searchUser() {
    // Lógica para buscar patients
  }

  addToLine(paciente: any) {
    // Lógica para añadir paciente a la fila de espera
  }

  selectFilter(option: any) {
    this.filterSelected = option;
  }
}
