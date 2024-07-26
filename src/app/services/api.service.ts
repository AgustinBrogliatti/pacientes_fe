import { Injectable } from '@angular/core';
import {ResponseLoginDTO} from "../dto/ResponseLoginDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RecordPreview} from "../model/RecordPreview";
import {MedicalRecord} from "../model/MedicalRecord";
import {Patient} from "../model/Patient";
import {Room} from "../model/Room";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _url : string = 'http://localhost:8080/api/'

  constructor(private http:HttpClient) { }

  getToken() : string | null {
    return localStorage.getItem('token') || null
  }

  getAuthHeader(): object {
    return { headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    }};
  }

  verifyToken(token: string): Observable<boolean> {
    return this.http.post<boolean>(this._url + `auth/validate-token`, { token })
  }

  login(username: string, password: string): Observable<ResponseLoginDTO> {
    return this.http.post<ResponseLoginDTO>(this._url + 'auth/login', {username: username, password: password})
  }

  getAllRecords(): Observable<RecordPreview[]> {
    return this.http.get<RecordPreview[]>(this._url + 'medical-record', this.getAuthHeader())
  }

  getRecordById(recordId: number): Observable<MedicalRecord> {
    return this.http.get<MedicalRecord>(this._url + 'medical-record/' + recordId, this.getAuthHeader())
  }

  updatePatient(recordId: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this._url + 'medical-record/' + recordId + '/patient', patient, this.getAuthHeader())
  }

  createRecord(newRecord: MedicalRecord): Observable<MedicalRecord> {
    return this.http.post<MedicalRecord>(this._url + 'medical-record', newRecord, this.getAuthHeader())
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this._url + 'room', this.getAuthHeader())
  }

  getPatientsRoom(roomId: number): Observable<Patient[]> {
    return this.http.get<Patient[]>(this._url + 'room/' + roomId + '/patients', this.getAuthHeader())
  }

  detelePatienfromRoom(patientDni: number, roomId: number): Observable<Room> {
    return this.http.delete<Room>(this._url + 'room/' + roomId + '/patients?patientId=' + patientDni, this.getAuthHeader())
  }

}
