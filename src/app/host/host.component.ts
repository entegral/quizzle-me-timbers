import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
  providers: [AuthenticationService]
})
export class HostComponent implements OnInit {

  // trivaQuestion: any[] = [];

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

currentQuestion() {

}

questionList() {

}


}
