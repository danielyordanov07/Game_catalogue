import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: User | null = null;
  constructor(private auth: AuthService, private router: Router) {
    this.user = auth.getCurrent();
    auth.currentUser$.subscribe(u => this.user = u);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  userHome() {
    this.router.navigate(['/home']);
  }
}
