import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyADX9W1zckuOTj4dnM9CKSA7U3ltfqWizA",
  authDomain: "plate-initiative.firebaseapp.com",
  projectId: "plate-initiative",
  storageBucket: "plate-initiative.appspot.com",
  messagingSenderId: "925069276027",
  appId: "1:925069276027:web:5e552b5a3dd7cc852a43de",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default app;
