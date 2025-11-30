import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
  <div class="container mt-4">
    <h3>Register</h3>
    <form [formGroup]="f" (ngSubmit)="onSubmit()">
      <div class="mb-3"><label>Name</label><input class="form-control" formControlName="name" /></div>
      <div class="mb-3"><label>Email</label><input class="form-control" formControlName="email" /></div>
      <div class="mb-3"><label>Password</label><input type="password" class="form-control" formControlName="password" /></div>
      <div *ngIf="error" class="text-danger mb-2">{{error}}</div>
      <button class="btn btn-primary" [disabled]="f.invalid">Register</button>
      <a class="btn btn-link" routerLink="/login">Login</a>
    </form>
  </div>
  `
})
export class RegisterComponent {
  f: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.f = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    this.error = '';
    try {
      await this.auth.register(this.f.value.email, this.f.value.password, this.f.value.name);
      this.router.navigate(['/profile']);
    } catch (e: any) {
      this.error = e?.message || 'Registration failed';
    }
  }
}
