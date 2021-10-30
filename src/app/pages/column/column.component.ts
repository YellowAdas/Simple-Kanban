import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  constructor(private mainService: MainService) {}

  ngOnInit(): void {}

  canAdd = false;
  toggleCanAdd() {
    this.canAdd = !this.canAdd;
  }
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
    this.mainService.addTask(newItem, column);
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


}
