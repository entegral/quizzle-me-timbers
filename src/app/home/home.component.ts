import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthenticationService]
})

export class HomeComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log('email/pass ', this.email, this.password)
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
    this.router.navigate(['host']);
  }

  logout(){
    this.authService.logout();
  }


}
