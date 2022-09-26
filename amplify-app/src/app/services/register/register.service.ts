import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  user:string = '';

  constructor(private router:Router) { }

  // username => email
  async registerUser(username:string, password:string) {   
    try {
      const { user } = await Auth.signUp({ username , password });
      console.log(user);

    } catch (error) {
        console.log('error signing up:', error);
    }
  }
}
