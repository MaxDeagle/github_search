import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { Repository } from 'src/app/models/repository';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

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
        MatFormFieldModule,
        MatExpansionModule,
        MatProgressBarModule
      ],
      declarations: [TableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('if TableComponent.repositories is not empty should render mat-accordion', async(() => {
    component.repositories = [mockRepo];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-accordion').textContent).toContain(mockRepo.name);
    expect(compiled.querySelector('mat-accordion').textContent).toContain(mockRepo.description);
  }));

  it('if TableComponent.repositories.branchesLoaded === true should render branches', () => {
    component.repositories = [mockRepo];
    component.repositories[0].branchesLoaded = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Branches');
  });
});

