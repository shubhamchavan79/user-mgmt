import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { UserService } from '../api/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {
  
  constructor(private api: UserService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    
    return this.api.getUserList();
  }
}
