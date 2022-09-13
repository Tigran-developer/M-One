import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = '';
  public password = '';
  public routeUrl = ''

  constructor(private router: Router, private authService: AuthService,
              private route: ActivatedRoute,) {
    this.router.navigate(['/']);
  }

  public ngOnInit(): void {
    this.routeUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  public signIn() {
    this.authService.isRegistered(this.username, this.password) ? this.router.navigate([this.routeUrl]) : null;
  }

  public navigate() {
    this.router.navigate(['/register']);
  }
}
