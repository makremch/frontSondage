import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  baseURL = 'http://956647126300.ngrok.io';
  login(email, password) {
    let url = this.baseURL + '/auth/login';
    return this.http.post<any>(url, { email, password }).pipe(tap(res => this.setToken(res)));
  }


  
  setToken(response){
    localStorage.setItem("token", response.token.token);
  }



}
