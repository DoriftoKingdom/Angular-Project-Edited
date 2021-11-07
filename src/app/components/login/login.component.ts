import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  onAddForm = (data: any) => {
    const email = data.form.value.email;
    const password = data.form.value.password;
  }

  ngOnInit(): void {
  }

}
