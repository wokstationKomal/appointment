import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appoinment } from '../Model/appoinment';
// import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AppoinmentsService {

  private _url = environment.API_URL;

  constructor(private http: HttpClient) { }

  getAppoinemts(): Observable<Appoinment[]>{
    return this.http.get<Appoinment[]>(`${this._url}/appoinments`)
  }

  createAppoinment(appoinmentDate: string, name: string, email: string): Observable<Appoinment>{
    return this.http.post<Appoinment>(`${this._url}/appoinments`, {appoinmentDate, name, email})
  } 

  canacelAppoinment(id: string): Observable<any>{
    return this.http.delete<any>(`${this._url}/appoinments/${id}`);
  }
}
