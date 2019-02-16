import { Branch, Repository } from './../../models/repository';
import { GithubService } from './../../services/github.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('repositories')
  public repositories: Repository[] = [];
  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }

  public loadBranches(repo: Repository) {
    const url = repo.branches_url.split('{')[0];
    this.githubService.loadBranches(url).subscribe((branches: Branch[]) => {
      repo.branches = branches;
      repo.branchesLoaded = true;
    });
  }

}
