import { Patient } from './Patient';

export class MedicalRecord {
  id?: number;
  doctorId: number;
  doctorName: string;
  patient: Patient;
  healthInsurances: string;
  allergies: string;
  medicines: string;
  previousHistory: string;

  constructor(
    doctorId: number,
    doctorName: string,
    patient: Patient,
    healthInsurances: string,
    allergies: string,
    medicines: string,
    previousHistory: string,
    id?: number
  ) {
    this.id = id;
    this.doctorId = doctorId;
    this.doctorName = doctorName;
    this.patient = patient;
    this.healthInsurances = healthInsurances;
    this.allergies = allergies;
    this.medicines = medicines;
    this.previousHistory = previousHistory;
  }
}
