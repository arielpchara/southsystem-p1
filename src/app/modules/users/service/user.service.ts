import { Injectable } from '@angular/core';
import { User } from '../user';
import { of as ObservableOf } from 'rxjs';

declare const localStorage: Storage;
const LOCAL_STORAGE_KEY = '_user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  readStorage() {
    return JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY) ) || [];
  }

  save(user: User) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([
      ...this.readStorage(),
      user
    ]));
  }

  getAll() {
    return ObservableOf(this.readStorage());
  }

}
