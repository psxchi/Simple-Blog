import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';

import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private loginService:LoginService) { }

  async userLogin() { 
    this.loginService.signInUser(this.email, this.password);
  }

  ngOnInit(): void {
  }

}
