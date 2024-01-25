import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logedin: BehaviorSubject<any>;

  constructor() {
    this.logedin = new BehaviorSubject<any>(this.Getfromlocalstorage());
  }

  Getfromlocalstorage() {
    let user = localStorage.getItem('data');

    if (user == null) {
      return [];
    } else {
      return JSON.parse(user);
    }
  }
}
