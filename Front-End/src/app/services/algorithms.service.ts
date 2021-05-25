import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {

  constructor(private http: HttpClient) { }

  kmeans(k:number, train: any[][], header:boolean) {
    return this.http.post<any>(`${environment.localhostUrl}/ml_models/kmeans/`, { k, train, header})
        .pipe(map(result => {
            //
            return result;
        }));
  }

  dbscan(eps:number, min_samples:number, train: any[][], header:boolean) {
    return this.http.post<any>(`${environment.localhostUrl}/ml_models/db_scan/`, { eps, min_samples, train, header })
        .pipe(map(result => {
            //
            return result;
        }));
  }

  agglomerative(n:number, train: any[][], header:boolean) {
    return this.http.post<any>(`${environment.localhostUrl}/ml_models/agglomerative/`, { n, train, header })
        .pipe(map(result => {
            //
            return result;
        }));
  }

  knn(label_col:number, n_neighbors:number, train:any[][], test:any[][], header:boolean){
    return this.http.post<any>(`${environment.localhostUrl}/ml_models/knn_classifier/`, { label_col, n_neighbors, train, test, header })
        .pipe(map(result => {
            //
            return result;
        }));
  }
  naivebayes(label_col:number, train:any[][], test:any[][], header:boolean){
    return this.http.post<any>(`${environment.apiUrl}/api/ml_models/gauss_nb/`, { label_col, train, test, header })
        .pipe(map(result => {
            //
            return result;
        }));
  }
  svm(label_col:number, train:any[][], test:any[][], header:boolean){
    return this.http.post<any>(`${environment.localhostUrl}/ml_models/svm_classifier/`, { label_col, train, test, header })
        .pipe(map(result => {
            //
            return result;
        }));
  }

}
