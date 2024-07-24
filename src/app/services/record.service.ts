import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import {RecordPreview} from "../model/RecordPreview";
import {MedicalRecord} from "../model/MedicalRecord";
import {Patient} from "../model/Patient";
@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private api:ApiService) {
  }

  getAllRecords(): Observable<RecordPreview[]> {
    return this.api.getAllRecords();
  }

  getRecordById(recordId: number): Observable<MedicalRecord> {
    return this.api.getRecordById(recordId);
  }
}
