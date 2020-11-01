import { Component, ElementRef, ViewChild } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
//
export class AppComponent {
  @ViewChild('myInput') myInput: ElementRef;
  todos: Todo = [];
  name = '';
  editState = false;
  addButton = 'Add';
  editIndex = '';

  // ======================================================
  Add() {
    if (this.editState === true) {
      const TodoList: Todo = {
        name: this.name,
        editState: this.editState,
      };

      this.todos.splice(this.editIndex, 1, TodoList);
      this.addButton = 'Add';
      this.editState = false;
      this.name = '';
    } else {
      const TodosList: Todo = {
        name: this.name,
        editState: this.editState,
      };
      this.todos.splice(0, 0, TodosList);
      this.name = '';
    }
    this.setFocus();
  }

  // ======================================================
  Delete(index) {
    this.todos.splice(index, 1);
    this.setFocus();
  }

  // ======================================================
  Edit(item, index) {
    this.editState = true;
    this.addButton = 'Update';
    this.name = item;
    this.editIndex = index;
    this.setFocus();
  }

  // ======================================================
  setFocus() {
    this.myInput.nativeElement.focus();
  }
}
