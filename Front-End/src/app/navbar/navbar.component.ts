import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services';
import { Router } from '@angular/router';
import { LogService } from '@app/services/log.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;

  constructor(private router: Router,private authenticationService: AuthService, private logger: LogService,) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }

  logout() {
    this.logger.log("LG2","user logged out").subscribe();
    this.authenticationService.logout();

    this.router.navigate(['/login']);
  }
  teacherView(){
    this.router.navigate(['/teacher_view']);
  }



}
