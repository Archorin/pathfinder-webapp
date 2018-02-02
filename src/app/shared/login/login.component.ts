import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AuthService } from 'app/core/authentification/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  validate() {
    console.log(this.authService.login(this.login, this.password));
  }
  logout() {
    this.authService.logout();
  }
}
