import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from '../models/ToDoItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<Array<ToDoItem>> {
    return this.http.get<Array<ToDoItem>>('http://localhost:3000/items');
  }

  // getItems() {
  //   return this.http.get<Array<any>>();
  // }

}
