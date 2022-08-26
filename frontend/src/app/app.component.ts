import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Word Game';
  loading$ = this.shared.loading$;
  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.shared.stopLoading();
    }, 2000);
  }
}
