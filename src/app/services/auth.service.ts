import {Injectable} from "@angular/core";
import {User} from "../models/user";

@Injectable({providedIn:"root"})
export class AuthService {
  constructor() {

  }
  public isRegistered(username: string, password: string): boolean {
    if (localStorage.getItem(username)) {
      return (JSON.parse(localStorage.getItem(username) as string) as User).password === password;
    }
    return false;
  }
}
