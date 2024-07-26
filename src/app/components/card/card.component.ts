import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Patient } from '../../model/Patient';
import {faEllipsisH, faTimes} from "@fortawesome/free-solid-svg-icons";
import {RecordDetailModalComponent} from "../record-detail-modal/record-detail-modal.component";
import {RecordService} from "../../services/record.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RoomService} from "../../services/room.service";
import {Room} from "../../model/Room";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() patient!: Patient;
  @Input() roomId!: number;
  displayText: string = '';

  @Output() moreClicked = new EventEmitter<void>();
  @Output() closeClicked = new EventEmitter<void>();

  constructor(private recordService:RecordService, private modalService: NgbModal, private roomService:RoomService) {}

  ngOnInit(): void {
    this.displayText = `${this.patient.name}, ${this.patient.lastname} - ${this.patient.dni}`;
  }

  openRecord(id: number) {
    const modalRef = this.modalService.open(RecordDetailModalComponent, { centered: true });
    modalRef.componentInstance.recordId = id;
  }

  onMoreClick(): void {

  }

  onCloseClick(): void {
    this.roomService.detelePatienfromRoom(this.patient.dni, this.roomId).subscribe((room: Room) => {
      this.closeClicked.emit();
    });
  }

  protected readonly faEllipsisH = faEllipsisH;
  protected readonly faTimes = faTimes;
}
