import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  post(url, data, options?): Observable<any> {
    return this.http.post(url, data, options);
  }

  get(url, options?): Observable<any> {
    return this.http.get(url, options);
  }

  put(url, data, options?): Observable<any> {
    return this.http.put(url, data, options);
  }

  delete(url, options?): Observable<any> {
    return this.http.delete(url, options);
  }
}
