import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/ToDoItem';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {

  items: ToDoItem[] = [];

  constructor(
    private beService: BackendService
  ) {
  }

  addItem(data:any) {
    const item = data.form.value;
    this.beService.postItem(item).subscribe();
    console.log(item);
  }

  ngOnInit(): void {
    this.beService.getItems().subscribe(
      (response) => {
        console.log(response)
      });
    console.log('onInit was called');
  }

}
