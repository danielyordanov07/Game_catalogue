import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogueComponent } from '../catalogue/catalogue.component';

@Component({
  selector: 'header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterModule,
    CommonModule,
    CatalogueComponent,
  ]
})
export class HeaderComponent {
  toggleCatalogue() {
    const catalogue = document.querySelector('catalogue');
    console.log(catalogue);
    if (catalogue)
      catalogue.classList.toggle('hidden');
    else
      console.error('Catalogue component not found');
  }
}