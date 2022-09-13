import {Injectable} from "@angular/core";
import {User} from "../models/user";

@Injectable({providedIn: 'root'})
export class UserService {
  constructor() {
  }

  public register(user: User) {
    localStorage.setItem(user.username, JSON.stringify(user))
    return localStorage.getItem(user.firstName);

  }
}
