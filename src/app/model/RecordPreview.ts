export class RecordPreview {
  id?: number;
  patientDni: number;
  patientLastname: string;
  patientName: string;
  healthInsurances: string;
  patientPhoneNumber: string;
  doctorName: string;

  constructor(
    patientDni: number,
    patientLastname: string,
    patientName: string,
    healthInsurances: string,
    patientPhoneNumber: string,
    doctorName: string
  ) {
    this.patientDni = patientDni;
    this.patientLastname = patientLastname;
    this.patientName = patientName;
    this.healthInsurances = healthInsurances;
    this.patientPhoneNumber = patientPhoneNumber;
    this.doctorName = doctorName;
  }
}
