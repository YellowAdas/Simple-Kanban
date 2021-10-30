import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor() {
    const toParse = localStorage.getItem('TestBoard');
    const columns: Column[] = toParse ? JSON.parse(toParse) : [];

    this.board$ = new BehaviorSubject<Board>(new Board('Test Board', columns));
  }

  board$: BehaviorSubject<Board>;

  writeToLocalStorage() {
    localStorage.setItem(
      'Test Board',
      JSON.stringify(this.board$.value.columns)
    );
  }

  addColumn() {
    this.board$.value.columns.push(new Column('Nowa', ['']));
    this.writeToLocalStorage();
  }

  addTask(nameItem: string, column: Column) {
    column.tasks.push(nameItem);
    this.writeToLocalStorage();
  }
}
