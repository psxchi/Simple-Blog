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

  constructor(private router: Router, private loginService:LoginService) { }

  async userLogin() { 
    this.loginService.signInUser(this.email, this.password);
    console.log('user:');
    
    /*
    try {
      const user = await Auth.signIn(this.email, this.password);
      console.log(user);
      if (user) {

        this.router.navigate(['/']);
      }
    } catch (error) {
        console.log('error signing in', error);
    }*/
  }

  ngOnInit(): void {
  }

}
