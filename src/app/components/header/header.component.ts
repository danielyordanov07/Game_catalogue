import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterModule,
    CommonModule,
    CatalogueComponent
  ]
})
export class HeaderComponent {
  @Input() user: User | null = null;
  constructor(private router: Router, private auth: AuthService) { }

  toggleCatalogue() {
    const catalogue = document.querySelector('catalogue');
    console.log(catalogue);
    if (catalogue)
      catalogue.classList.toggle('hidden');
    else
      console.error('Catalogue component not found');
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}