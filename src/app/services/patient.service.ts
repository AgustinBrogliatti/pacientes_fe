import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Patient} from "../model/Patient";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private api:ApiService) { }

  updatePatient(recordId: number, patient: Patient): Observable<Patient> {
    return this.api.updatePatient(recordId, patient);
  }
}
