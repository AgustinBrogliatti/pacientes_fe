import { Injectable } from '@angular/core';
import {ResponseLoginDTO} from "../dto/ResponseLoginDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

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
    return {headers: { 'Authorization': 'Bearer ' + this.getToken()} }
  }

  verifyToken(token: string): Observable<boolean> {
    return this.http.post<boolean>(this._url + `auth/validate-token`, { token })
  }

  login(username: string, password: string): Observable<ResponseLoginDTO> {
    return this.http.post<ResponseLoginDTO>(this._url + 'auth/login', {username: username, password: password})
  }
}
