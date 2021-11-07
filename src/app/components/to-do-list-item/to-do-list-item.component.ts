import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/ToDoItem';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.css']
})
export class ToDoListItemComponent implements OnInit {
  item: ToDoItem = {
    id: 1,
    title: 'Study Angular',
    description: 'My description'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
