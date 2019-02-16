import { Repository } from './../../models/repository';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input('repositories')
  public repositories: Repository[] = [];

  @Output('loadBranchesEvent')
  private loadBranchesEvent = new EventEmitter<Repository>();

  public loadBranches(repo: Repository) {
    this.loadBranchesEvent.emit(repo);
  }

}
