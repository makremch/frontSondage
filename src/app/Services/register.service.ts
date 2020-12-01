import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }


  baseURL = 'http://956647126300.ngrok.io';

  register(email, password) {
    let url = this.baseURL + '/auth/signup';
    return this.http.post<any>(url, { email, password });
  }

}
