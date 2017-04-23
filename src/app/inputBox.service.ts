import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Todo } from "./todo";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//import {map} from "rxjs/operator/map";

@Injectable()
export class inputBoxService {
  private todoUrl = 'http://localhost:8080/todos';

  constructor(private http: Http) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.todoUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }
//name: string
  createTodo(todo: Todo): Observable<Todo> {
    let headers = new Headers({ 'Content-Type': 'application/application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    console.log("je to v service createTodo()");

    return this.http.post(this.todoUrl,  todo , options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    // let body = res.json();
    // return body.data || {};    let body;

    // check if empty, before call json
    let body;
    if (res.text()) {
      body = res.json();
    }

    return body || {};

  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
