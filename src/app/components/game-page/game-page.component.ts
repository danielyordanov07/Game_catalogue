import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'game-page',
  standalone: true,
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
  imports: [
    CommonModule
  ]
})
export class GamePageComponent {
  public selectedGame;

  constructor(private gameService: GameService) {
    this.selectedGame = this.gameService.selectedGame;
  }
}
