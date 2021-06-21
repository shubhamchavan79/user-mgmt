import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  // Storage variable
  private storage: Storage;

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    // Init storage variable.
    this.storage = window.localStorage;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  // Set user token in local storage.
  public setSession(result: any) {
    this.loggedIn.next(true);
    // Set token.
    if (result.token) {
      this.storage.setItem('token', result.token);
    }
  }

  // Get user token from local storage.
  public getToken(): string {
    return this.storage.getItem('token')!;
  }

  // Remove user token from local storage.
  public clearSessoion() {
    this.loggedIn.next(false);
    this.storage.clear();
  }

  // Authenticate user before routing.
  public isAuthenticated(): boolean {
    const token = this.getToken();
    // Check whether the token is expired and return true or false.
    if (token) {
      this.loggedIn.next(true);
      return true;
    } else {
      this.loggedIn.next(false);
      return false;
    }
  }

}
