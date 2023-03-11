import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommitsService {
  urlBase = "http://localhost:3000/";

  constructor(public http: HttpClient) {}

  getCommits(repositoryName: string) {
    return this.http.get(this.urlBase + "getCommits/" + repositoryName);
  }

  getRepositories() {
    return this.http.get(this.urlBase + "getRepositories");
  }
}
