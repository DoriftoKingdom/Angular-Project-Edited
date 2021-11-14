import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/ToDoItem';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.css']
})
export class ToDoListItemComponent implements OnInit {
  @Input() item: any;

  constructor(private beService: BackendService) { }

  deleteItem(id: number) {
    this.beService.deleteItem(id).subscribe();
  }

  ngOnInit(): void {
  }

}
