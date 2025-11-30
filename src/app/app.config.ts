import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// --- Firebase Imports ---
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, isSupported } from '@angular/fire/analytics';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB03tC-I2tkZtDupY0_SvlxhG9_ZHs-uMo",
  authDomain: "game-catalogue-5735b.firebaseapp.com",
  projectId: "game-catalogue-5735b",
  storageBucket: "game-catalogue-5735b.firebasestorage.app",
  messagingSenderId: "70094989394",
  appId: "1:70094989394:web:17bcc3d60980bb4a0e978b",
  measurementId: "G-JDC4LM3CLW"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideClientHydration(),

    // --- Firebase Providers ---
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => {
      if (isSupported()) {
        return getAnalytics();
      }
      return {} as any;
    }), provideAnimationsAsync()
    // --- End Firebase Providers ---
  ]
};