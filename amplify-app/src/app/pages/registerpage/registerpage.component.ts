import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private registerService:RegisterService) { }

  async userLogin() { 
    this.registerService.registerUser(this.username, this.password);
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
