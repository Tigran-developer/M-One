import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import {ReplaySubject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnDestroy {
  public firstName = '';
  public lastName = '';
  public userName = '';
  public password = '';

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private userService: UserService, private router: Router) {
  }

  public signUp() {
    // if(localStorage.getItem(this.firstName)){
    //   return false;
    // }
   return  this.userService.register({
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.userName,
      password: this.password,
    } as User);
  }


  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
