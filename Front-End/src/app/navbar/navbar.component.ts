import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services';
import { Router } from '@angular/router';
import { LoggingService } from '@app/services/logging.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;

  constructor(private router: Router,private authenticationService: AuthService, private loggingService: LoggingService,) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }

  logout() {
    this.loggingService.logging_activity(this.currentUser.email, "logout", new Date(), "user logout")
    .pipe(first())
    .subscribe(
      data =>{
        console.log("logging: activity submitted")
      },
      error => {
        console.log("error in logging activity.")
      }
    )
    this.authenticationService.logout();

    this.router.navigate(['/login']);
  }
  teacherView(){
    this.router.navigate(['/teacher_view']);
  }



}
