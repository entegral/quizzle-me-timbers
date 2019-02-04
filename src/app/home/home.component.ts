import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthenticationService]
})

export class HomeComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout(){
    this.authService.logout();
  }

}
