import { Component } from '@angular/core';

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.css']
})
export class PatientsTableComponent {
  filterSelected = { title: 'DNI', key: 'dni' };
  filterOptions = [
    { title: 'DNI', key: 'dni' },
    { title: 'Apellido', key: 'lastname' },
  ];
  search = '';
  pacientes = [
    { dni: '12345678', lastname: 'Perez', name: 'Juan', medical_coverage: 'OSDE', medical_cover_id: '1234', personal_number: '123456789', dr: 'Dr. Smith' },
  ];

  searchUser() {
    // Lógica para buscar pacientes
  }

  addToLine(paciente: any) {
    // Lógica para añadir paciente a la fila de espera
  }

  selectFilter(option: any) {
    this.filterSelected = option;
  }
}
