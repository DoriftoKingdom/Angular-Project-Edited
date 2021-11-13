import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    private beService: BackendService
  ) { }
  username = '';

  ngOnInit(): void {
    this.beService.getUsers().subscribe(users => {
      this.username = users[0].name;
    });
  }

}
