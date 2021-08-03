import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { AuthService } from '.';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private authenticationService: AuthService,
    private http: HttpClient) { }

  log(activity_id:string,description: any) {
    var email =this.authenticationService.currentUserValue.email;
    var time = new Date();
    return this.http.post<any>(`${environment.apiUrl}/user/logging/`, { email, activity_id, time, description});
  }
}
