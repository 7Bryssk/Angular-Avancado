import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  group
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
      // mesma animação para ambos os lados
      // transition('active <=> inactive', animate('500ms ease-out'))
      // transição para todos os estados criados
      // transition('active => *', animate('500ms ease-out'))
    ]),

    trigger('listState', [
      state('in', style({
        transform: 'translateX()0', opacity: 1
      })),
      //          void => * pode ser substituido por :enter
      transition('void => *', [
        style({
          transform: 'translateX(-50%)'
        }),
        animate(500)
      ]),
      //          * => void pode ser substituido por :leave
      transition('* => void', [
        animate(800, keyframes([
          style({
            backgroundColor: 'red',
            offset: 0
          }),
          style({
            width: '1%',
            offset: 0.5
          }),
          style({
            transform: 'translateX(30%)',
            opacity: 0,
            offset: 1
          }),
        ]))
      ])
    ]),

    trigger('listOpen', [
      state('open', style({
        height: '*',
        fontSize: 16
      })),
      state('closed', style({
        height: 0,
        fontSize: 0
      })),
      transition('open <=> closed', animate('800ms cubic-bezier(0.680, -0.550, 0.265, 1.550)'))
    ])
  ]
})
export class MyButtonComponent implements OnInit {
  myStateVar = 'active';
  myList = [];
  myListState = 'open';

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.insertItem();
    this.myStateVar = this.myStateVar === 'active' ? 'inactive' : 'active';
  }

  insertItem() {
    this.myList.push(this.myList.length)
  }

  removeItem(index) {
    this.myList.splice(index, 1);
  }

  toggleListState() {
    this.myListState = this.myListState === 'open' ? 'closed' : 'open';
  }

}
