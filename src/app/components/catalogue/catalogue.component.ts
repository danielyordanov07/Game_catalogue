import { Component, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  trigger = input.required<boolean>();
  games = [
    { name: 'Game One', description: 'An exciting adventure game.', price: 29.99 },
    { name: 'Game Two', description: 'A thrilling action game.', price: 49.99 },
    { name: 'Game Three', description: 'A captivating puzzle game.', price: 19.99 }
  ];

  constructor() {
    effect(() => {
      console.log('Catalogue trigger changed:', this.trigger());
    });    
  }
}