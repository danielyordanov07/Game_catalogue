import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        const u: User = { id: firebaseUser.uid, email: firebaseUser.email || '' };
        this.currentUserSubject.next(u);
      } else {
        this.currentUserSubject.next(null);
      }
    });
  }

  async register(email: string, password: string, name?: string) {
    const cred = await createUserWithEmailAndPassword(this.auth, email, password);
    const u: User = { id: cred.user.uid, email: cred.user.email || '', name };
    this.currentUserSubject.next(u);
    return u;
  }

  async login(email: string, password: string) {
    const cred = await signInWithEmailAndPassword(this.auth, email, password);
    const u: User = { id: cred.user.uid, email: cred.user.email || '' };
    this.currentUserSubject.next(u);
    return u;
  }

  async logout() {
    await signOut(this.auth);
    this.currentUserSubject.next(null);
  }

  isAuthenticated() {
    return !!this.currentUserSubject.value;
  }

  getCurrent() {
    return this.currentUserSubject.value;
  }
}