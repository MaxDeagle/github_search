import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  repositories: Repository[] = [];
  public updateRepositories(repositories: Repository[]) {
    this.repositories = [...repositories];
  }
}
