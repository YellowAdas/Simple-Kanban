import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {}


  board$ = new BehaviorSubject<Board>(
    new Board('Test Board', [
      new Column('Ideas', [
        'Some random idea',
        'Some random idea',
        'Some random idea',
      ]),
      new Column('Tasks', [
        'Some random task 1',
        'Some random task 2',
        'Some random task 3',
        'Some random task 4',
      ]),
      new Column('Todo', [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep',
      ]),
      new Column('Done', [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
      ]),
    ])
  );

  addColumn() {
    this.board$.value.columns.push(new Column('Nowa', ['']));
  }
}
