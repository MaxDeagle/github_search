import { of } from 'rxjs/internal/observable/of';
import { GithubService } from './services/github.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { EventEmitter, Output, Component, DebugElement, Directive, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Repository } from './models/repository';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let mockSearchElement: DebugElement;
  let mockSearchComponent: MockSearchDirective;

  let mockTableElement: DebugElement;
  let mockTableComponent: MockTableDirective;

  let githubService: GithubService;

  const mockRepo: Repository = {
    archive_url: 'https://api.github.com/repos/phodal/github/{archive_format}{/ref}',
    archived: false,
    assignees_url: 'https://api.github.com/repos/phodal/github/assignees{/user}',
    blobs_url: 'https://api.github.com/repos/phodal/github/git/blobs{/sha}',
    branches_url: 'https://api.github.com/repos/phodal/github/branches{/branch}',
    clone_url: 'https://github.com/phodal/github.git',
    collaborators_url: 'https://api.github.com/repos/phodal/github/collaborators{/collaborator}',
    comments_url: 'https://api.github.com/repos/phodal/github/comments{/number}',
    commits_url: 'https://api.github.com/repos/phodal/github/commits{/sha}',
    compare_url: 'https://api.github.com/repos/phodal/github/compare/{base}...{head}',
    contents_url: 'https://api.github.com/repos/phodal/github/contents/{+path}',
    contributors_url: 'https://api.github.com/repos/phodal/github/contributors',
    created_at: '2015-03-09T14:50:58Z',
    default_branch: 'gh-pages',
    deployments_url: 'https://api.github.com/repos/phodal/github/deployments',
    description: 'GitHub 漫游指南- a Chinese ebook on how to build a good project on Github. Explorsome thing interest.',
    downloads_url: 'https://api.github.com/repos/phodal/github/downloads',
    events_url: 'https://api.github.com/repos/phodal/github/events',
    fork: false,
    forks: 1054,
    forks_count: 1054,
    forks_url: 'https://api.github.com/repos/phodal/github/forks',
    full_name: 'phodal/github',
    git_commits_url: 'https://api.github.com/repos/phodal/github/git/commits{/sha}',
    git_refs_url: 'https://api.github.com/repos/phodal/github/git/refs{/sha}',
    git_tags_url: 'https://api.github.com/repos/phodal/github/git/tags{/sha}',
    git_url: 'git://github.com/phodal/github.git',
    has_downloads: true,
    has_issues: true,
    has_pages: true,
    has_projects: true,
    has_wiki: false,
    homepage: 'https://github.phodal.com',
    hooks_url: 'https://api.github.com/repos/phodal/github/hooks',
    html_url: 'https://github.com/phodal/github',
    id: 31904268,
    issue_comment_url: 'https://api.github.com/repos/phodal/github/issues/comments{/number}',
    issue_events_url: 'https://api.github.com/repos/phodal/github/issues/events{/number}',
    issues_url: 'https://api.github.com/repos/phodal/github/issues{/number}',
    keys_url: 'https://api.github.com/repos/phodal/github/keys{/key_id}',
    labels_url: 'https://api.github.com/repos/phodal/github/labels{/name}',
    language: 'HTML',
    languages_url: 'https://api.github.com/repos/phodal/github/languages',
    license: null,
    merges_url: 'https://api.github.com/repos/phodal/github/merges',
    milestones_url: 'https://api.github.com/repos/phodal/github/milestones{/number}',
    mirror_url: null,
    name: 'github',
    node_id: 'MDEwOlJlcG9zaXRvcnkzMTkwNDI2OA==',
    notifications_url: 'https://api.github.com/repos/phodal/github/notifications{?since,all,participating}',
    open_issues: 1,
    open_issues_count: 1,
    private: false,
    pulls_url: 'https://api.github.com/repos/phodal/github/pulls{/number}',
    pushed_at: '2019-02-03T01:07:28Z',
    releases_url: 'https://api.github.com/repos/phodal/github/releases{/id}',
    score: 118.350174,
    size: 24712,
    ssh_url: 'git@github.com:phodal/github.git',
    stargazers_count: 4025,
    stargazers_url: 'https://api.github.com/repos/phodal/github/stargazers',
    statuses_url: 'https://api.github.com/repos/phodal/github/statuses/{sha}',
    subscribers_url: 'https://api.github.com/repos/phodal/github/subscribers',
    subscription_url: 'https://api.github.com/repos/phodal/github/subscription',
    svn_url: 'https://github.com/phodal/github',
    tags_url: 'https://api.github.com/repos/phodal/github/tags',
    teams_url: 'https://api.github.com/repos/phodal/github/teams',
    trees_url: 'https://api.github.com/repos/phodal/github/git/trees{/sha}',
    updated_at: '2019-02-16T14:55:36Z',
    url: 'https://api.github.com/repos/phodal/github',
    watchers: 4025,
    watchers_count: 4025,
    owner: {
      avatar_url: 'https://avatars1.githubusercontent.com/u/472311?v=4',
      events_url: 'https://api.github.com/users/phodal/events{/privacy}',
      followers_url: 'https://api.github.com/users/phodal/followers',
      following_url: 'https://api.github.com/users/phodal/following{/other_user}',
      gists_url: 'https://api.github.com/users/phodal/gists{/gist_id}',
      gravatar_id: '',
      html_url: 'https://github.com/phodal',
      id: 472311,
      login: 'phodal',
      node_id: 'MDQ6VXNlcjQ3MjMxMQ==',
      organizations_url: 'https://api.github.com/users/phodal/orgs',
      received_events_url: 'https://api.github.com/users/phodal/received_events',
      repos_url: 'https://api.github.com/users/phodal/repos',
      site_admin: false,
      starred_url: 'https://api.github.com/users/phodal/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/phodal/subscriptions',
      type: 'User',
      url: 'https://api.github.com/users/phodal'
    },
    branches: [],
    branchesLoaded: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatProgressBarModule,
        MatInputModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        MockSearchDirective,
        MockTableDirective,
        SearchComponent,
        TableComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockSearchElement = fixture.debugElement.query(By.directive(MockSearchDirective));
    mockSearchComponent = mockSearchElement.injector.get(MockSearchDirective) as MockSearchDirective;

    mockTableElement = fixture.debugElement.query(By.directive(MockTableDirective));
    mockTableComponent = mockTableElement.injector.get(MockTableDirective) as MockTableDirective;

    githubService = TestBed.get(GithubService);
  }));

  it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should contain search component', () => {
    expect(mockSearchElement).toBeTruthy();
  });

  it('searchEvent from app-search should call loadRepositories', fakeAsync(() => {
    spyOn(component, 'loadRepositories');
    mockSearchComponent.searchEvent.emit('q');
    tick(400);
    expect(component.loadRepositories).toHaveBeenCalledWith('q');
  }));

  it('loadBranchesEvent from app-table should call loadBranches', () => {
    spyOn(component, 'loadBranches');
    mockTableComponent.loadBranchesEvent.emit(mockRepo);
    expect(component.loadBranches).toHaveBeenCalledWith(mockRepo);
  });

  it('loadRepositories should call githubService.search if parameter !== ""', () => {
    spyOn(githubService, 'search').and.returnValue(of([]));
    component.loadRepositories('q');
    expect(githubService.search).toHaveBeenCalledWith('q');
  });

  it('loadRepositories should set repositories if parameter !== ""', () => {
    spyOn(githubService, 'search').and.returnValue(of([mockRepo]));
    component.loadRepositories('q');
    expect(component.repositories.length).toBe([mockRepo].length);
  });

  it('loadRepositories should not call githubService.search and should set repositories in [] if parameter is ""', () => {
    spyOn(githubService, 'search').and.returnValue(of([]));
    component.loadRepositories('');
    expect(githubService.search).not.toHaveBeenCalled();
    expect(component.repositories.length).toBe(0);
  });

  it('loadBranches should call githubService.loadBranches', () => {
    spyOn(githubService, 'search').and.returnValue(of([]));
    component.loadRepositories('q');
    expect(githubService.search).toHaveBeenCalledWith('q');
  });
});

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'app-search'
})
class MockSearchDirective {
  @Output('searchEvent')
  public searchEvent = new EventEmitter<string>();
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'app-table'
})
class MockTableDirective {
  @Output('loadBranchesEvent')
  public loadBranchesEvent = new EventEmitter<Repository>();

  @Input()
  public repositories: Repository[];
}
