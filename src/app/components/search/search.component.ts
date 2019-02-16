import { Repository } from './../../models/repository';
import { GithubService } from './../../services/github.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output('searchEvent')
  private searchEvent = new EventEmitter<Repository[]>();
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private githubService: GithubService
  ) {
    this.searchForm = this.fb.group({
      letters: [null]
    });

    this.searchForm.controls.letters.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((value) => {
      if (!value) {
        this.searchEvent.emit([]);
        return;
      }
      this.githubService.search(value).subscribe((repositories: Repository[]) => {
        this.searchEvent.emit(repositories);
      });
    });
  }

  ngOnInit() {
  }

}
