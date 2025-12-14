import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase web configuration from your project settings
const firebaseConfig = {
  apiKey: 'AIzaSyC6g--p-SLfPo-yaEEVQtyk7pzoyNvfd_I',
  authDomain: 'web-design-finals-project.firebaseapp.com',
  projectId: 'web-design-finals-project',
  storageBucket: 'web-design-finals-project.firebasestorage.app',
  messagingSenderId: '1070480575760',
  appId: '1:1070480575760:web:91dd95dce6aeec07bfe995',
  measurementId: 'G-SCT48WRL7Q',
};

// Initialize Firebase app (singleton)
const app = initializeApp(firebaseConfig);

// Firestore instance for comments and other data
export const db = getFirestore(app);

// Auth instance - with error handling
let auth: ReturnType<typeof getAuth> | null = null;
try {
  auth = getAuth(app);
} catch (error) {
  console.error('Firebase Auth initialization error:', error);
}

export { auth };

