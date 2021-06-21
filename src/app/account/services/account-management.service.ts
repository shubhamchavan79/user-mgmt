import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {

  constructor(private http: HttpClient) { }

  login(params: any){
    return this.http.post(environment.baseUrl+'login', params);
  }

  register(params: any){
    return this.http.post(environment.baseUrl+"register", params);
  }

}
