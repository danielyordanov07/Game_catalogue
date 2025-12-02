export interface Game {
  id?: string; // Optional, as Firestore generates this
  name: string;
  description: string;
  genre: string;
  price: number;
  imageURL: string; // URL to the image
}