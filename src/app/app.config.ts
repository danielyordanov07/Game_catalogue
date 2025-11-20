import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB03tC-I2tkZtDupY0_SvlxhG9_ZHs-uMo",
  authDomain: "game-catalogue-5735b.firebaseapp.com",
  projectId: "game-catalogue-5735b",
  storageBucket: "game-catalogue-5735b.firebasestorage.app",
  messagingSenderId: "70094989394",
  appId: "1:70094989394:web:17bcc3d60980bb4a0e978b",
  measurementId: "G-JDC4LM3CLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
};
