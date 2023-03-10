import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommitsService {
  urlBase = 'http://localhost:3000/';

  constructor(public http: HttpClient) {}

  getCommits() {
    return this.http.get(this.urlBase + 'getCommits');
  }

  getRepositories() {
    return this.http.get(this.urlBase + 'getRepositories');
  }
}
