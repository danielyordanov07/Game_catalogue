import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: []
})
export class LoginComponent {
  constructor(private auth: Auth){

  }
  
}
