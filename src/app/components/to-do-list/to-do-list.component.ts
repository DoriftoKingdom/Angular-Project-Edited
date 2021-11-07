import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/ToDoItem';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit, OnDestroy {

  items: ToDoItem[] = [
    {
      id: 1,
      title: 'Study Angular',
      description: 'My description'
    },
    {
      id: 2,
      title: 'Study HTML',
      description: 'My description'
    },
    {
      id: 3,
      title: 'Study CSS',
      description: 'My description'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log('onInit was called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy was called');
  }

}
