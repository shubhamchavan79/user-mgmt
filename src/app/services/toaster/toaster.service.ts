import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private subject = new Subject<any>();

  constructor() { }

  sendMessage(message: string, isSuccessMsg: boolean) {
    this.subject.next({ message, isSuccessMsg });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
