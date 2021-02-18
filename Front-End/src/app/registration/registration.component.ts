import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    university : new FormControl(''),
    FName : new FormControl(''),
    LName : new FormControl(''),
    email : new FormControl(''),
    password: new FormControl(''),
    Vpassword: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.registerForm.value);
  }

}
