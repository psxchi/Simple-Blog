import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'aws-amplify';
import { CognitoUser } from 'src/models/cognito-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:string = '';

  constructor(private router:Router) { }

  getUser() {
    return this.user;
  }

  async signInUser(email:string, password: string) {   
    try {
      const user = await Auth.signIn(email, password);

      if (user) {
        this.user = user.Session;
        /*
        this.user = new CognitoUser({
          "session": user.session,
          "challengeName": user.challengeName,
          "challengeParam": user.challengeParam,
          "client": user.client,
          "pool": user.pool,
          "userDataKey": user.userDataKey,
          "username": user.username
      });*/
        this.router.navigate(['/']);
      }

    } catch (error) {
        console.log('error signing in', error);
    }
  }
}
