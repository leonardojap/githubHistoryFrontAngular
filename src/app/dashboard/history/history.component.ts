import { Component, OnInit } from '@angular/core';
import { Commit } from 'src/app/models/commint';
import { Repository } from 'src/app/models/repository';
import { CommitsService } from '../services/commits.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  proyect = '';
  commits: Commit[] = [];
  repositories: Repository[] = [];

  constructor(public commitService: CommitsService) {
    //call the list of repositories to the select options
    this.commitService.getRepositories().subscribe((res: any) => {
      this.repositories = res;
    });
  }

  ngOnInit(): void {}

  //if the user select a repository, this function will be called
  changeProyect($event: any) {
    console.log($event.target.value);
    this.proyect = $event.target.value; //put in the title the name of the repository
    this.commitService.getCommits().subscribe((res: any) => {
      this.commits = res;
    });
  }
}
