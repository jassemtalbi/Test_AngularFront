import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employe } from '../model/employe';
import { Login } from '../model/Login';
const API_URL = 'http://localhost:8083/employee/';

@Injectable({
  providedIn: 'root'
})


export class TestService {

  constructor(private http: HttpClient) { }

  getALL() {
    return this.http.get<employe>(API_URL + 'all');
  }
  AddEmploye(userName: any, email: any, password: any, rpassword: any, id_Department: any, id_role: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('userName', userName);
    params = params.append('email', email);
    params = params.append('password', password);
    params = params.append('rpassword', rpassword);
    params = params.append('id_Department', id_Department);
    params = params.append('id_role', id_role);
    return this.http.post(API_URL + `AddEmploye/${userName}/${email}/${password}/${rpassword}/${id_Department}/${id_role}`, employe);

  }
  Login(userName: any, password: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('userName', userName);
    params = params.append('password', password);
    return this.http.get(API_URL + `Login/${userName}/${password}`);

  }
  delete(id: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get(API_URL + `Deleteemploye/${id}`);

  }
  Findbyid(id: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get(API_URL + `find/${id}`);

  }
  update(payload: employe): Observable<any> {
    const body = {
      "id": payload.id,
      "email": payload.email,
      "password": payload.password,
      "id_Department": payload.id_Department,
      "id_role": payload.id_role,
      "user_Name": payload.user_Name,
      "rpassword": payload.rpassword
    };

    return this.http.put(API_URL + `update`,body);

  }
}
