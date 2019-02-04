import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  questions: Object[] = [];
  constructor(private apiService: ApiService) {}

  apiInfo = null;

  // getQuestion(){
  //   this.apiService.randomQuestion.subscribe((response) => {
  //     console.log(response);
  //   });
  // }

  getQuestionsByCategory() {
    this.apiService.clueList.subscribe((response) => {
      response.forEach(element => {
        this.questions.push(element);
      });
      console.log(this.questions);

    });
  }
}
