import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Todo[] = [
    {completed: false, task: 'get food'},
    {completed: false, task: 'go to bed'},
    {completed: true, task: 'wake up'}
  ];

  constructor() { }

  ngOnInit() {
  }

  completeClicked(todoItem: Todo) {
    todoItem.completed = true;
  }

}
