import { Component, OnInit } from '@angular/core';
import { CsgoService } from '../service/csgo.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnInit {
  team : any;
  players : any = [];

  constructor(private csgoService : CsgoService) {
    this.loadTeamCard()
  }

  ngOnInit(): void {
  }
  
  
  async loadTeamCard() {
    try {
      this.team = await this.csgoService.getTeamCard(5973)
    } catch (error) {
      console.log(error)
    }

    const players = this.team.players

    players.forEach((player: any) => {
      this.loadPlayerCard(player.idPlayer)
    })

  }

  async loadPlayerCard(id: number) {
    try {
      let player = await this.csgoService.getPlayerCard(id)
      this.players.push(player);
    } catch (error) {
      console.log(error)
    }
  }

}
