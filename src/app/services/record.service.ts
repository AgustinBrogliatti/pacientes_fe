import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import {MedicalRecord} from "../model/MedicalRecord";
@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private api:ApiService) {
  }

  getAllRecords(): Observable<MedicalRecord[]> {
    return this.api.getAllRecords();
  }
}
