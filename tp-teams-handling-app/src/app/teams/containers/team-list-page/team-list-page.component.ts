import { Component, OnInit } from '@angular/core';
import {TeamService} from "@team-handling/teams/services/team.service";
import {Team} from "@team-handling/teams/models/team";
import {Router} from "@angular/router";

@Component({
  selector: 'app-team-list-page',
  templateUrl: './team-list-page.component.html',
  styleUrls: ['./team-list-page.component.scss']
})
export class TeamListPageComponent implements OnInit {

  teams: Team[] | [];
  message: string;

  constructor(private teamService: TeamService,
              private router: Router) {
    this.teams = [];
    this.message = '';
  }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(teams => this.teams =  teams);
    this.teamService.pullMessage().subscribe(m => this.message = m);
  }

  onSelectTeam(team: Team): void{
    this.teamService.pushTeam(team);
    this.router.navigate([`team/${team.id}`])
      .catch();
  }



}
