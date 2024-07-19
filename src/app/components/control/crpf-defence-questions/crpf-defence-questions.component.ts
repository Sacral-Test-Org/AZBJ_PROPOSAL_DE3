import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { NgxLoggerLevel, LoggerService } from 'ngx-logger';

@Component({
  selector: 'app-crpf-defence-questions',
  templateUrl: './crpf-defence-questions.component.html',
  styleUrls: ['./crpf-defence-questions.component.css']
})
export class CrpfDefenceQuestionsComponent implements OnInit {
  questions: any[] = [];
  errorMessage: string = '';

  constructor(private controlService: ControlService, private logger: LoggerService) {}

  ngOnInit(): void {
    this.fetchCRPFDefenceQuestions();
  }

  fetchCRPFDefenceQuestions(): void {
    this.controlService.fetchCRPFDefenceQuestions().subscribe(
      (data) => {
        this.questions = data;
      },
      (error) => {
        this.errorMessage = 'Failed to load questions';
        this.logger.log(NgxLoggerLevel.ERROR, 'Error fetching CRPF/Defence questions', error);
      }
    );
  }
}
