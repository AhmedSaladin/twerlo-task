import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-incorrect',
  templateUrl: './incorrect.component.html',
  styleUrls: ['./incorrect.component.css'],
})
export class IncorrectComponent implements OnInit {
  @Input() word = '';
  @Input() type = '';
  constructor() {}

  ngOnInit(): void {}
}
