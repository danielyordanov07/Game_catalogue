import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Firestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  collectionData,
  docData,
  CollectionReference
} from '@angular/fire/firestore';

import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gamesCollection: CollectionReference<Game>;
  public selectedGame: WritableSignal<Game | null> = signal<Game | null>(null);

  constructor(private firestore: Firestore) {
    this.gamesCollection = collection(this.firestore, 'games') as CollectionReference<Game>;
  }

  setSelectedGame(game: Game | null): void {
    this.selectedGame.set(game);
  }

  getSelectedGame(): Game | null {
    return this.selectedGame();
  }

  async addGame(game: Omit<Game, 'id'>): Promise<string> {
    const docRef = await addDoc(this.gamesCollection, game);
    return docRef.id;
  }

  async getGames(): Promise<Game[]> {
    const querySnapshot = await getDocs(this.gamesCollection);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async getGame(id: string): Promise<Game | undefined> {
    const gameDocRef = doc(this.firestore, 'games', id);
    const docSnapshot = await getDoc(gameDocRef);
    if (!docSnapshot.exists()) return undefined;

    return { id: docSnapshot.id, ...(docSnapshot.data() as Game) };
  }

  getGamesStream(): Observable<Game[]> {
    return collectionData(this.gamesCollection, { idField: 'id' }) as Observable<Game[]>;
  }

  getGameStream(id: string): Observable<Game | undefined> {
    const gameDocRef = doc(this.firestore, 'games', id);
    return docData(gameDocRef, { idField: 'id' }) as Observable<Game | undefined>;
  }
}
