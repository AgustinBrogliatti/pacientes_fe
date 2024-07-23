import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { ResponseLoginDTO } from '../dto/ResponseLoginDTO';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedUser = false

  constructor(private apiService: ApiService, private router: Router) { }

  login(email: string, password: string) : Observable<ResponseLoginDTO> {
    let response  = this.apiService.login(email, password)
    response.subscribe(
      (jwt) => {
        console.log(jwt)
        localStorage.setItem('token', jwt.token!)
        this.isLoggedUser = true
        this.router.navigateByUrl("/home")
      }
    )
    return response
  }

  isUserLogin(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      return of(false);
    }
    return this.apiService.verifyToken(token);
  }

  logout() {
    localStorage.removeItem('token')
    this.isLoggedUser = false
  }
}
