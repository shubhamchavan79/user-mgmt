import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserData } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList(page: number = 1, per_page: number = 10): Observable<any> {
    return this.http.get(environment.baseUrl+'users?page='+page+'&per_page='+per_page)
  }

  getUserDetails(id: number): Observable<any> {
    return this.http.get(environment.baseUrl+'users/'+id)
  }

  updateUser(id: number, params: any): Observable<any> {
    return this.http.put(environment.baseUrl+'users/'+id, params);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(environment.baseUrl+'users/'+id);
  }

}
