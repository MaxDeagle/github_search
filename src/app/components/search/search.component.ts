import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output('searchEvent')
  private searchEvent = new EventEmitter<string>();
  public searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      letters: [null]
    });

    this.searchForm.controls.letters.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((value) => {
      this.searchEvent.emit(value);
    });
  }

}
