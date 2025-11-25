import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, CollectionReference } from '@angular/fire/firestore';

export interface Game {
  name: string;
  description: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gamesCollection: CollectionReference<Game>;

  constructor(private firestore: Firestore) {
    this.gamesCollection = collection(this.firestore, 'games') as CollectionReference<Game>;
  }

  async addGame(game: Game) {
    try {
      const docRef = await addDoc(this.gamesCollection, game);
      console.log('Game added with ID: ', docRef.id);
      return docRef.id;
    } catch (e) {
      console.error('Error adding game: ', e);
      throw e;
    }
  }
}
