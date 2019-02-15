import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private baseUrl = 'https://api.github.com';
  constructor(private apiService: ApiService) { }

  public search(letters: string): Observable<Repository[]> {
    const params = new HttpParams().set('q', letters);
    return this.apiService.get(`${this.baseUrl}/search/repositories`, { params }).pipe(
      map((response) => {
        return response.items;
      }
    ));
  }
}
