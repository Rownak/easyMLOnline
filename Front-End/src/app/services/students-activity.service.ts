import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { catchError, retry, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StudentsActivityService {
  baseUrl = 'http://127.0.0.1:8000/activity/all_activities/'
  activities = null;
  constructor(
    private httpClient: HttpClient
  ) { }
  getAllStudentActivity(){
    this.activities = this.httpClient.get(`${environment.localhostUrl}/activity/all_activities/`);
    console.log(this.activities);
    return this.activities;
  }

}
