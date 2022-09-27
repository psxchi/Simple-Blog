import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { BlogDataService } from '../blog-data/blog-data.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private router:Router, private loginService:LoginService, private blogDataService:BlogDataService) { }

  // username => email
  async registerAndLoginUser(username:string, password:string) {   
    try {
      await Auth.signUp({ username , password });

      this.loginService.signInUser(username, password);
      this.blogDataService.createUser(username, username, password);
      this.router.navigate(['/']);

    } catch (error) {
        console.log('error signing up:', error);
    }
  }
}
