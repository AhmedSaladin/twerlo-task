import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css'],
})
export class RankComponent implements OnInit {
  rank = 0;

  constructor(
    private activity: ActivityService,
    private shared: SharedService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getRank();
  }

  getRank() {
    this.activity.getRank().subscribe((rank) => {
      this.rank = rank;
    });
  }
  
  startGame() {
    this.shared.startLoading();
    this.route.navigateByUrl('words');
  }
}
