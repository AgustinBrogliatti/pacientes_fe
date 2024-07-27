import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Room} from "../model/Room";
import {Patient} from "../model/Patient";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private api:ApiService) {
  }

  getRooms(): Observable<Room[]> {
    return this.api.getRooms();
  }
  getPatientsRoom(roomId: number): Observable<Patient[]> {
    return this.api.getPatientsRoom(roomId);
  }

  detelePatienfromRoom(patientDni: number, roomId: number): Observable<Room> {
    return this.api.detelePatienfromRoom(patientDni, roomId);
  }

  addToLine(patientDni: number, roomId: number): Observable<Room> {
    return this.api.addToLine(patientDni, roomId);
  }
}
