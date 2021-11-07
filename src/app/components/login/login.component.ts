import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  onAddForm = (data: any) => {
    const email = data.form.value.email;
    const password = data.form.value.password;
    this.router.navigate(['/list']);
  }

  ngOnInit(): void {
  }

}