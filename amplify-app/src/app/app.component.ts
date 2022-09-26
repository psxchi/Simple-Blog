import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title:string = 'Simple Blog';
  isLoggedin: boolean = false;
  loginButtonText: string = 'Login';

  constructor(private router:Router, private loginService:LoginService) { }


  adjustLoggedin() {
    this.isLoggedin =  this.loginService.getUser() !== undefined;
    this.isLoggedin ? this.loginButtonText = 'Logout' : this.loginButtonText = 'Login';
  }

  register() {
    this.router.navigate(['/register']);
  }

  loginout() {
    if (this.isLoggedin) {
      this.loginService.signOutUser();
      this.router.navigate(['/']);
      return;
    }
    this.router.navigate(['login']);
  }

  async ngOnInit() {
    this.adjustLoggedin();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  }
}