import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService,AlertService } from '@app/services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private alertService: AlertService) {
      // if (this.authenticationService.currentUserValue) {
      //   this.router.navigate(['/']);
      // }
     }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      university : ['', Validators.required],
      FName : ['', Validators.required],
      LName : ['', Validators.required],
      email : ['', Validators.required],
      password: ['', Validators.required],
      Vpassword: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = '/login';
  }

  get f() { return this.form.controls; }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.authenticationService.register(
      this.f.university.value, this.f.FName.value,this.f.LName.value,
      this.f.email.value,this.f.password.value,this.f.Vpassword.value
      )
    .subscribe(
         data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
         },
         error => {
          this.alertService.error(error);
         });

  }

}
