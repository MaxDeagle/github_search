import { environment } from './../../environments/environment';
import { Repository, Branch } from './../models/repository';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = environment.githubBaseUrl;
  constructor(private http: HttpClient) { }

  public search(letters: string): Observable<Repository[]> {
    const params = new HttpParams().set('q', letters);
    return this.http.get(`${this.baseUrl}/search/repositories`, { params }).pipe(
      map((response: any) => {
        const repositories: Repository[] = response.items;
        return repositories;
      }
    ));
  }

  public loadBranches(url: string): Observable<Branch[]> {
    return this.http.get(url).pipe(
      map((items: Branch[]) => items)
    );
  }
}
