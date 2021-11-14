import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from '../models/ToDoItem';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  // CRUD items

  getItems(): Observable<Array<ToDoItem>> {
    return this.http.get<Array<ToDoItem>>('http://localhost:3000/items');
  }

  postItem(item: ToDoItem): Observable<ToDoItem> {
    return this.http.post<ToDoItem>('http://localhost:3000/items', item);
  }

  deleteItem(id: number): Observable<ToDoItem> {
    return this.http.delete<ToDoItem>('http://localhost:3000/items/'+id);
  }

  // CRUD users

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('http://localhost:3000/users');
  }
  
}
