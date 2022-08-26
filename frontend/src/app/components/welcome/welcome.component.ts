import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(private shared: SharedService, private route: Router) {}

  ngOnInit(): void {}

  startGame() {
    this.shared.startLoading();
    this.route.navigateByUrl('words');
  }
}
