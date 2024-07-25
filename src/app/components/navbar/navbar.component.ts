import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NewPatientModalComponent} from "../new-patient-modal/new-patient-modal.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private loginService: LoginService, private router: Router, private modalService: NgbModal) {}

  openNewPatientModal() {
    const modalRef = this.modalService.open(NewPatientModalComponent, { centered: true });
    modalRef.componentInstance.isNewPatient = true;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
