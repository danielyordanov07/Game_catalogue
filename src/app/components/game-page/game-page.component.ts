import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { GameBoardComponent } from '../game-board/game-board.component';

import { MatButtonModule } from '@angular/material/button';

import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'game-page',
  standalone: true,
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
  imports: [
    CommonModule,
    GameBoardComponent,
    MatButtonModule
  ]
})
export class GamePageComponent {
  public selectedGame;

  constructor(private gameService: GameService) {
    this.selectedGame = this.gameService.selectedGame;
  }

  public clearSelect() {
    this.gameService.setSelectedGame(null);
  }
}
