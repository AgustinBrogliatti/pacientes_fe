import { Patient } from './Patient';

export class Room {
  id?: number;
  name: String;
  patient: Patient;

  constructor(
    id: number,
    name: String,
    patient: Patient

) {
    this.id = id;
    this.name = name;
    this.patient = patient;
  }
}
