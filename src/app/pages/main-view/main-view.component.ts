import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import { MainService } from 'src/app/service/main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent {
  ngOnInit() {
    this.getIds();
  }

  constructor(private mainService: MainService) {}

  canAdd = false;
  board$: Observable<Board> = this.mainService.board$;
  ids: string[] = [];

  value = '';

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

  addItem(newItem: string, column: Column) {
    column.tasks.push(newItem);
    this.canAdd = !this.canAdd;
  }

  getIds() {
    this.ids = this.mainService.board$.value.columns.map((s) => s.name);
    console.log(this.ids);
  }

  deleteItem(name: string, column: Column) {
    const id = column.tasks.indexOf(name);
    column.tasks.splice(id, 1);
  }

  newColumn() {
    this.mainService.addColumn();
  }

  toggleCanAdd() {
    this.canAdd = !this.canAdd;
  }
}
