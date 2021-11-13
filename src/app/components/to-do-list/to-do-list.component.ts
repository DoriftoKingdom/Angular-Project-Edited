import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  addItem(data: NgForm) {
    const item = data.form.value;
    this.beService.postItem(item).subscribe(
      (res: ToDoItem) => {
        this.items.push(res);
      }
    );
    console.log(item);
    // clears form inputs
    data.reset();
  }

  ngOnInit(): void {
    this.beService.getItems().subscribe(
      (response) => {
        this.items = response;
      });
  }

}
