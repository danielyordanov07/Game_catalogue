import { Component, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { data } from '../../../../data/games'

@Component({
  selector: 'catalogue',
  standalone: true,
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
  imports: [
    CommonModule
  ]
})
export class CatalogueComponent {
  games = data.games;
}