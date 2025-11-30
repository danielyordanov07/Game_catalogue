import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    RouterModule
  ]
})
export class AppComponent {
  title = 'Game_catalogue';
}