import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { IWord } from 'src/app/shared/models/word';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent implements OnInit {
  words: IWord[] = [];
  count = -1;
  answers = 0;
  message = 'noun';
  constructor(
    private activity: ActivityService,
    private route: Router,
    private shared: SharedService
  ) {}

  ngOnInit(): void {
    this.getWords();
  }

  getWords() {
    this.activity.getWords().subscribe((data) => {
      this.words = data;
      this.count++;
    });
  }

  selectType(type: string) {
    if (this.word.pos == type) {
      this.answers++;
      this.message = this.messageTypes.correct;
    } else {
      this.message = this.messageTypes.incorrect;
    }

    this.clearMessage();
  }

  get word() {
    return this.words[this.count];
  }

  private get gameFinished() {
    return this.count + 1 >= this.words.length;
  }

  get gameStatus() {
    return (this.count + 1) * 10;
  }

  private calculateScore() {
    if (this.answers > 0) return (this.answers / this.words.length) * 100;
    return 0;
  }

  itStillRunning() {
    if (this.gameFinished) {
      this.activity.updateScore(this.calculateScore());
      setTimeout(() => {
        this.shared.startLoading();
        this.route.navigateByUrl('rank');
      }, 1500);
    }
  }

  display() {
    return (
      this.count >= 0 &&
      this.count < this.words.length &&
      this.message == this.messageTypes.noun
    );
  }

  correct() {
    return this.message == this.messageTypes.correct;
  }

  incorrect() {
    return this.message == this.messageTypes.incorrect;
  }

  private clearMessage() {
    setTimeout(() => {
      this.message = this.messageTypes.noun;
      this.count++;
    }, 1500);
  }

  private get messageTypes() {
    return {
      correct: 'correct',
      incorrect: 'incorrect',
      noun: 'noun',
    };
  }
}
