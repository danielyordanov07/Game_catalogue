import { Component } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CommonModule,
    HeaderComponent
  ]
})
export class HomeComponent {

}
