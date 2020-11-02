import { Component, ElementRef, ViewChild } from '@angular/core';
import { Todo } from './todo';
import { Title } from '@angular/platform-browser';

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

  // set the document title
  constructor(private title: Title) {}
  ngOnInit() {
    this.title.setTitle('Yet Another Todo App');
  }

  // ======================================================
  Add() {
    // dont allow blank entries
    if (this.name === '') {
      this.setFocus();
      return;
    }

    // edit a todo item
    if (this.editState === true) {
      const TodoList: Todo = {
        name: this.name,
        editState: this.editState,
      };

      this.todos.splice(this.editIndex, 1, TodoList);
      this.addButton = 'Add';
      this.editState = false;
      this.name = '';
      // add a todo item
    } else {
      const TodosList: Todo = {
        name: this.name,
        editState: this.editState,
      };
      this.todos.splice(0, 0, TodosList);
      this.name = '';
    }
    // return focus to the input
    this.setFocus();
  }

  // ======================================================
  Delete(index: number) {
    this.todos.splice(index, 1);
    this.name = '';
    this.setFocus();
  }

  // ======================================================
  Edit(item: string, index: number) {
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
