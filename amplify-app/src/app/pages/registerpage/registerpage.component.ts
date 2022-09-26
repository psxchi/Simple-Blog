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

  constructor(private registerService:RegisterService) { }

  async userRegister() { 
    this.registerService.registerAndLoginUser(this.username, this.password);
  }

  ngOnInit(): void {
  }

}
