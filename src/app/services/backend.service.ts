import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from '../models/ToDoItem';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  // CRUD items

  getItems(): Observable<Array<ToDoItem>> {
    return this.http.get<Array<ToDoItem>>(`${this.baseUrl}/items`);
  }

  postItem(item: ToDoItem): Observable<ToDoItem> {
    return this.http.post<ToDoItem>(`${this.baseUrl}/items`, item);
  }

  deleteItem(id: number): Observable<ToDoItem> {
    return this.http.delete<ToDoItem>(`${this.baseUrl}/items/`+id);
  }

  // CRUD users

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.baseUrl}/users`);
  }
  
  postUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }
  
}
