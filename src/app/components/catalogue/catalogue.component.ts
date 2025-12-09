import { Component, OnInit, Output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal, WritableSignal, EventEmitter } from '@angular/core';

import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'catalogue',
  standalone: true,
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class CatalogueComponent implements OnInit {
  @Output() toggleCatalogue = new EventEmitter<void>;

  games: WritableSignal<Game[]> = signal([]);

  nameField: WritableSignal<string> = signal("");
  publisherField: WritableSignal<string> = signal("");

  // Computed signal that filters games based on nameField and publisherField
  filteredGames = computed(() => {
    const name = this.nameField().toLowerCase();
    const publisher = this.publisherField().toLowerCase();

    return this.games().filter(game => {
      const gameName = game.name?.toLowerCase() ?? '';
      const gamePublisher = game.publisher?.toLowerCase() ?? '';

      const nameMatch = !name || gameName.includes(name);
      const publisherMatch = !publisher || gamePublisher.includes(publisher);

      return nameMatch && publisherMatch;
    });
  });

  constructor(private gameService: GameService) { }

  async ngOnInit(): Promise<void> {
    const loadedGames = await this.gameService.getGames();
    this.games.set(loadedGames);
  }

  public openGamePage(gameName: string): void {
    const game = this.games().find(g => g.name === gameName) ?? null;
    this.gameService.selectedGame.set(game);
    this.toggleCatalogue.emit();
  }
}