import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private beService: BackendService
  ) { }

  login = (data: any) => {
    const email = data.form.value.email;
    const password = data.form.value.password;
    this.beService.getUsers().subscribe((users) => {
      const user = users.find(user => user.email === email && user.password === password);
      console.log(user);
      if (user) {
        this.router.navigate(['/list']);
        localStorage.setItem('isLoggedIn', 'true');
      }
    })
  }

  ngOnInit(): void {
  }

}
