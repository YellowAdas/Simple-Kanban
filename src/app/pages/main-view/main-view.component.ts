import { Component, ElementRef } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent {
  ngOnInit() {
    this.getIds();
  }

  constructor() {}

  ids: string[] = [];
  canAdd = false;
  value = '';

  board: Board = new Board('Test Board', [
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
  ]);

  dropColumn(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.ids, event.previousIndex, event.currentIndex);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onClick() {
    this.canAdd = !this.canAdd;
  }

  addItem(newItem: string, column: Column) {
    column.tasks.push(newItem);
    this.canAdd = !this.canAdd;
  }

  getIds() {
    this.ids = this.board.columns.map((s) => s.name);
    console.log(this.ids);
  }

  deleteItem(name: string, column: Column) {
    const id = column.tasks.indexOf(name);
    column.tasks.splice(id, 1);
  }
}
