import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
  animations: [
    trigger('btnState', [
      state('inactive', style({
        backgroundColor: 'gray',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: 'green',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class MyButtonComponent implements OnInit {
  myStateVar = 'active';

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.myStateVar = this.myStateVar === 'active' ? 'inactive' : 'active';
  }

}
