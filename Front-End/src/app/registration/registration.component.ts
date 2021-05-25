import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AuthService } from '@app/services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('regModal') modal;
  modalRef: BsModalRef;
  form: FormGroup;
  submitted = false;
  returnUrl: string;
  title: string;
  message: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private modalService: BsModalService) {
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
      }
     }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      university : ['', Validators.required],
      FName : ['', Validators.required],
      LName : ['', Validators.required],
      email : ['', Validators.required],
      password: ['', Validators.required],
      Vpassword: ['', Validators.required],
      course: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = '/login';
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
      this.f.email.value,this.f.password.value,this.f.Vpassword.value,
      this.f.course.value
      )
    .subscribe(
         data => {
          this.title='Registration successful';
          this.message='Registration was successful! \n A verification email has been sent to your eamil address.';
          this.openModal(this.modal);
          this.router.navigate(['/login']);
         },
         error => {
          this.message='';
          this.title='Registration error';
          for(let key in error.error){
            for(let message in error.error[key])
            this.message+=error.error[key][message]+"\n";
          }
          this.openModal(this.modal);
         });

  }

}
