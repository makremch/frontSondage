import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SondageService {

  constructor(private http: HttpClient) { }



  baseURL = 'http://956647126300.ngrok.io';

  createSondage(titre, description) {
    let url = this.baseURL + '/sondage/create';
    return this.http.post<any>(url, { titre, description });
  }

  getSondages() {
    let url = this.baseURL + '/sondage/list';
    return this.http.get<any>(url);
  }

  createvote(choix , sondage : string){
    let url = this.baseURL + '/sondage/vote';
    let token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })}
    return this.http.post<any>(url, { choix, sondage } , httpOptions);
  }

  showVoteBySondage(sondage : string){
    let url = this.baseURL + '/sondage/voteBysondage';
    let token = localStorage.getItem("token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })}
    return this.http.post<any>(url, { sondage } , httpOptions);
  }

  

}
