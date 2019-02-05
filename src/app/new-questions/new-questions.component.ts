import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-questions',
  templateUrl: './new-questions.component.html',
  styleUrls: ['./new-questions.component.css'],
  providers: [ApiService]
})
export class NewQuestionsComponent implements OnInit {
  questions: Object[] = [];

  constructor(private apiService: ApiService) { }

  getQuestionsByCategory() {
    this.apiService.clueList.subscribe((response) => {
      response.forEach(element => {
        this.questions.push(element);
      });
      console.log(this.questions);

    });
  }

  ngOnInit() {
  }

}
