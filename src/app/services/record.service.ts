import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import {RecordPreview} from "../model/RecordPreview";
import {MedicalRecord} from "../model/MedicalRecord";
@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private api:ApiService) {
  }

  getAllRecords(): Observable<RecordPreview[]> {
    return this.api.getAllRecords();
  }

  getRecordById(id: number): Observable<MedicalRecord> {
    return this.api.getRecordById(id);
  }
}
