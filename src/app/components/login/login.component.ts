import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private auth: Auth){
    
  }
  
}
