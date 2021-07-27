import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from '.';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private authenticationService: AuthService,
    private http: HttpClient) { }

  log(activity:string,description: any) {
    var email =this.authenticationService.currentUserValue.email;
    var time = new Date();
    return this.http.post<any>(`${environment.apiUrl}/user/logging/`, { email, activity, time, description});
  }
}
