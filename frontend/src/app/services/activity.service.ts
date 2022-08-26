import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IWord } from '../shared/models/word';




@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  url = environment.endPoint;
  private score = 0;

  constructor(private http: HttpClient) { }

  getWords() {
    return this.http.get<IWord[]>(`${this.url}/words`);
  }

  getRank() {
    return this.http.post<{ rank: number }>(`${this.url}/ranks`, { score: this.score })
      .pipe(map(data => {
        return data.rank;
      }));
  }

  updateScore(newScore: number) {
    this.score = newScore;
  }

}
