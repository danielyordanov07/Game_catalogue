import { Component, inject } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { HeaderComponent } from '../header/header.component';
import { GameBoardComponent } from "../game-board/game-board.component";
import { GamePageComponent } from "../game-page/game-page.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    CommonModule,
    HeaderComponent,
    RouterModule,
    GamePageComponent
]
})
export class HomeComponent {
  private auth = inject(AuthService);
  user$: Observable<User | null> = this.auth.currentUser$;
}
