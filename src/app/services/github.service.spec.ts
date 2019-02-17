import { environment } from './../../environments/environment.prod';
import { of } from 'rxjs/internal/observable/of';
import { Repository, Branch } from './../models/repository';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GithubService } from './github.service';
import { HttpParams } from '@angular/common/http';

describe('GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
  });

  it('should be created', inject([GithubService], (service: GithubService) => {
    expect(service).toBeTruthy();
  }));

  it('Search method should return observable of Repository[]', (done) => {
    const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
    const fakeRepos: Repository[] = [];
    const fakeResponse = { items: fakeRepos };
    const obs = of(fakeResponse);
    const fakeUrl = `${environment.githubBaseUrl}/search/repositories`;
    const fakeParams = { params: new HttpParams().set('q', 'q') };
    httpSpy.get.and.returnValue(obs);

    const githubService = new GithubService(httpSpy);
    githubService.search('q').subscribe((result: Repository[]) => {
      expect(result).toBe(fakeRepos);
      expect(httpSpy.get).toHaveBeenCalledWith(fakeUrl, fakeParams);
      done();
    });
  });

  it('loadBranches method should return observable of Branch[]', (done) => {
    const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
    const fakeBranches: Branch[] = [];
    const obs = of(fakeBranches);
    const fakeUrl = 'http://';
    httpSpy.get.and.returnValue(obs);

    const githubService = new GithubService(httpSpy);
    githubService.loadBranches(fakeUrl).subscribe((result: Branch[]) => {
      expect(result).toBe(fakeBranches);
      expect(httpSpy.get).toHaveBeenCalledWith(fakeUrl);
      done();
    });
  });
});
