import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    CatalogueComponent,
    LoginComponent
  ]
})
export class HeaderComponent {
  toggleCatalogue() {
    const catalogue = document.querySelector('catalogue');
    catalogue?.classList.toggle('hidden');
  }
}