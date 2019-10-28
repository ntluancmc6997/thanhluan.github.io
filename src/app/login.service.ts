import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Users: User[] = [{ userName: 'admin', passWord: 'admin'}, { userName: 'admin1', passWord: 'admin1' }];
  User: User
  constructor() { }
  getTodayDate(user, pass) {
    for (let item of this.Users) {
      if (item.userName == user && item.passWord == pass)
        return true;
    }
    return false;
  }
}
