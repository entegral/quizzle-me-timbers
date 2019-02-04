import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthenticationService]
})

export class HomeComponent implements OnInit {
  email: string;
  password: string = "";
  errorMessage: string = null;

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log('email/pass ', this.email, this.password)
    this.authService.login(this.email, this.password);
    this.email = this.password = '';

    let authTest: string
    this.authService.user.subscribe((response)=>{
      console.log('response is ', response);
      response ? authTest = response['uid'] : null;
      console.log(authTest);
      if (response && authTest){
        console.log('Hello Alex, welcome back.');
        this.router.navigate(['host']);
      }
      else {
        this.errorMessage = "You are not authorized to host this game."
        console.log('test failed, user not logged in');
      }
    });
  }


  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }

}
