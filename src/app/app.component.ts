import { GithubService } from './services/github.service';
import { Repository, Branch } from './models/repository';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private githubService: GithubService) {}
  repositories: Repository[] = [];

  public loadRepositories(letters: string) {
    if (!letters) {
      this.repositories = [];
      return;
    }
    this.githubService.search(letters).subscribe((repositories: Repository[]) => {
      this.repositories = [...repositories];
    });
  }

  public loadBranches(repo: Repository) {
    const url = repo.branches_url.split('{')[0];
    this.githubService.loadBranches(url).subscribe((branches: Branch[]) => {
      repo.branches = branches;
      repo.branchesLoaded = true;
    });
  }
}
