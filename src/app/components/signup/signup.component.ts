import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private be: BackendService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addUser(formData: NgForm) {
    const user = formData.form.value;
    this.be.postUser(user).subscribe(
      () => {
        alert('User added!');
        formData.reset();
        this.router.navigate(['/']);
      }
    );
  }
}
