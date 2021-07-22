import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(
    private http: HttpClient
  ) { }

  logging_activity(email: string, activity_id:number, time: Date, description:string) {
    return this.http.post<any>(`${environment.localhostUrl}/user/logging/`, { email, activity_id, time, description})
        .pipe(map(result => {
            //
            console.log(result);
        }));
  }
}
