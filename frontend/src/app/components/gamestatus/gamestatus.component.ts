import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gamestatus',
  templateUrl: './gamestatus.component.html',
  styleUrls: ['./gamestatus.component.css'],
})
export class GamestatusComponent implements OnInit {
  @Input() status = 0;
  constructor() {}

  ngOnInit(): void {}
}
