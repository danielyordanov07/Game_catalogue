import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from '../catalogue/catalogue.component';

@Component({
  selector: 'header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    CommonModule,
    CatalogueComponent
  ]
})
export class HeaderComponent {

}