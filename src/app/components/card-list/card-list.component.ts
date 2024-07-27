import {Component, OnInit} from '@angular/core';
import {Patient} from "../../model/Patient";
import {Room} from "../../model/Room";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RoomService} from "../../services/room.service";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: Patient[] = [];
  rooms: Room[] = [];
  selectedRoom: any = null;

  constructor(private roomService:RoomService, private modalService: NgbModal, private storeService:StoreService) {}

  ngOnInit(): void {
    this.loadRooms();
    this.storeService.refreshPatients$.subscribe(() => {
      if (this.selectedRoom) {
        this.getPatientsByRoom(this.selectedRoom.id);
      }
    });
  }

  loadRooms(): void {
    this.roomService.getRooms().subscribe((rooms: any[]) => {
      this.rooms = rooms;
      if (rooms.length > 0) {
        this.selectedRoom = rooms[0];
        this.getPatientsByRoom(this.selectedRoom.id)
        this.storeService.setRoom(this.selectedRoom);
      }
    })
  }

  getPatientsByRoom(roomId: number): void {
    this.roomService.getPatientsRoom(roomId).subscribe((patients: Patient[]) => {
      this.cards = patients;
    });
  }

  selectRoom(room: Room): void {
    this.selectedRoom = room;
    this.getPatientsByRoom(this.selectedRoom.id);
    this.storeService.setRoom(room);
  }
  onMoreClick(): void {
  }

  onCloseClick(): void {
    this.getPatientsByRoom(this.selectedRoom.id);
  }

}
