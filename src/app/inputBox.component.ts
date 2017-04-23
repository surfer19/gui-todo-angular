import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import { inputBoxService } from './inputBox.service';
import {Todo} from "./todo";
//import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'input-box',
  templateUrl: './inputBox.component.html',
  providers: [ inputBoxService ]
})

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})

export class InputBoxComponent implements OnInit {
  errorMessage: string;
  todos: Todo[];
  mode = 'Observable';

  // doneTodos = [];
  // value: string;
  // id: number;
  // done_id: number;

  constructor(private InputBoxService: inputBoxService){}

  // constructor(){
  //   this.doneTodos = [];
  //   this.value = '';
  //   this.id = -1;
  //   this.done_id = -1;
  // }

  // addTask(value: string){ // newTask: string
  //   if (value){
  //     // push new obj to array
  //     this.todos.push({
  //       id: this.id+=1,
  //       task_value: value,
  //       is_done: false
  //     });
  //
  //     console.log("added task = " + this.todos.slice(-1)[0]);
  //   }
  // }

  ngOnInit() { this.getTodos(); }

  getTodos(){
    this.InputBoxService.getTodos()
      .subscribe(
          todos => this.todos = todos,
          error => this.errorMessage = <any>error);
  }
  addTodo(name: string) {
    if (!name) { return; }
    console.log("je to v component addTodo()");

    let bla = new Todo(name, 'aaa');

    this.InputBoxService.createTodo(bla)
      .subscribe(
        todo  => this.todos.push(bla),
        error =>  this.errorMessage = <any>error);
  }

  // deleteTask(id) {
  //   for (let i = 0; i < this.todos.length; i++ ){
  //     if (this.todos[i].id == id) {
  //       this.todos.splice(i, 1);
  //       console.log("deleted task = " + i);
  //     }
  //   }
  // }

  // setTaskDone(todo){
  //   //set tod0 as done
  //   this.todos.filter(function( obj ) {
  //     if (obj.id == todo.id){
  //       obj.is_done = true;
  //     }
  //   });
  //   //clear done task
  //   this.clearDoneTask(todo.id);
  //
  //   console.log("setted task as done");
  //   // TODO return task that was set ????
  //   return todo;
  //   //console.table(this.todos);
  // }

  // clearDoneTask(id: number){
  //   this.todos.forEach((obj, index) => {
  //     if(obj.id == id) {
  //       this.todos.splice(index, 1);
  //       this.addDoneTaskToList(obj);
  //       // TODO return deleted item
  //       return obj;
  //     }
  //   });
  //
  //   console.log("cleared todo");
  //   console.table(this.todos);
  //   //return this.todos.splice(id, 1);
  // };

  // addDoneTaskToList(obj){
  //   this.doneTodos.push({
  //     id: this.done_id+=1,
  //     task_value: obj.task_value,
  //     is_done: true
  //   });
  //   console.table(this.doneTodos);
  // }

  //editTask
}

