import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';
import { CognitoUser } from 'src/models/cognito-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:CognitoUser | undefined;

  constructor(private router:Router) { }

  getUser() {
    return this.user;
  }

  async signInUser(email:string, password: string) {   
    try {
      const user = await Auth.signIn(email, password);

      if (user) {
        this.user = user;
        this.router.navigate(['/']);
      }

    } catch (error) {
        console.log('error signing in', error);
    }
  }

  async signOutUser() {
    try {
      await Auth.signOut();
      this.user = undefined;
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

}
