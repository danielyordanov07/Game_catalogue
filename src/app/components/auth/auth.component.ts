import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AuthComponent {
  email = '';
  password = '';
  errorMessage: string | null = null;

  constructor(private auth: Auth) { }

  async signUp() {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      console.log('User signed up:', userCredential.user);
      this.errorMessage = null;
      
    } catch (error: any) {
      this.errorMessage = error.message;
      console.error('Sign up error:', error);
    }
  }

  async signIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      console.log('User signed in:', userCredential.user);
      this.errorMessage = null;

    } catch (error: any) {
      this.errorMessage = error.message;
      console.error('Sign in error:', error);
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      console.log('User logged out');
    } catch (error: any) {
      this.errorMessage = error.message;
      console.error('Logout error:', error);
    }
  }
}