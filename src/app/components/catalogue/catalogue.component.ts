import { Component, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal, WritableSignal, EventEmitter } from '@angular/core';

import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';

import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'catalogue',
  standalone: true,
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
  imports: [
    CommonModule
  ]
})
export class CatalogueComponent implements OnInit {
  @Output() toggleCatalogue = new EventEmitter<void>;
  
  games: Game[] = [];

  constructor(private gameService: GameService) { }

  public selectedGame: WritableSignal<Game | null> = signal<Game | null>(null);

  async ngOnInit(): Promise<void> {
    this.games = await this.gameService.getGames();
  }


  public openGamePage(gameName: string): void {
    const game = this.games.find(g => g.name === gameName) ?? null;
    this.gameService.selectedGame.set(game);

    this.toggleCatalogue.emit();
  }
}