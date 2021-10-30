import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { IdeasComponent } from './pages/ideas/ideas.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TodoComponent } from './pages/todo/todo.component';
import { DoneComponent } from './pages/done/done.component';
@NgModule({
  declarations: [AppComponent, MainViewComponent, IdeasComponent, TasksComponent, TodoComponent, DoneComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
