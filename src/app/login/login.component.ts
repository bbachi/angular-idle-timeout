import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppService } from '../_services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private appService: AppService) { }

  model: User = new User();

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    console.log(this.model)
    if(loginForm.valid) {
      this.appService.setUserLoggedIn(true)
      this.router.navigate(['/dashboard']);
    }
  }

}

export class User {

  constructor(
    
  ) {  }

  public userName: string;
  public password: string;

}
