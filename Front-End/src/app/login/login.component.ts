import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from '@app/services';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LogService } from '@app/services/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
    private logger: LogService,
    private modalService: BsModalService) {
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
      }
    }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get f() { return this.form.controls; }
  public current_time: Date = new Date();
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.authenticationService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
            this.logger.log("LG1","user logged in").subscribe();

        },
        error => {
          this.message='';
          this.title='Login error';
          for(let key in error.error){
            for(let message in error.error[key])
            this.message+=error.error[key][message]+"\n";
          }
          this.openModal(this.modal);
        });

  }



}
