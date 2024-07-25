import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientsTableComponent } from './components/patients-table/patients-table.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { RecordDetailModalComponent } from './components/record-detail-modal/record-detail-modal.component';
import {RecordService} from "./services/record.service";
import { NewPatientModalComponent } from './components/new-patient-modal/new-patient-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    PatientsTableComponent,
    CardListComponent,
    RecordDetailModalComponent,
    NewPatientModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
