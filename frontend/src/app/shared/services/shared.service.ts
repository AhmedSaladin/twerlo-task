import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface T {}

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  loading$ = new BehaviorSubject(true);

  constructor() {}

  stopLoading() {
    this.loading$.next(false);
  }

  startLoading() {
    this.loading$.next(true);

    setTimeout(() => {
      this.stopLoading();
    }, 1500);
  }
}
