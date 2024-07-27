import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Room} from "../model/Room";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private roomSubject = new BehaviorSubject<Room | null>(null);
  room$ = this.roomSubject.asObservable();
  private refreshPatientsSubject = new Subject<void>();
  refreshPatients$ = this.refreshPatientsSubject.asObservable();

  setRoom(room: Room): void {
    this.roomSubject.next(room);
  }

  getRoom(): Room | null {
    return this.roomSubject.value;
  }

  triggerRefresh(): void {
    this.refreshPatientsSubject.next();
  }
}
