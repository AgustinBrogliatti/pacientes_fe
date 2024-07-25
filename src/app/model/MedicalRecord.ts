import { Patient } from './Patient';

export class MedicalRecord {
  patient: Patient;
  doctor: { id: number };
  healthInsurances: string;
  allergies: string;
  medicines: string;
  previousHistory: string;
  id?: number;

  constructor(
    patient: Patient,
    doctorId: number,
    healthInsurances: string,
    allergies: string,
    medicines: string,
    previousHistory: string,
    id?: number
  ) {
    this.patient = patient;
    this.doctor = { id: doctorId };
    this.healthInsurances = healthInsurances;
    this.allergies = allergies;
    this.medicines = medicines;
    this.previousHistory = previousHistory;
    this.id = id;
  }
}
