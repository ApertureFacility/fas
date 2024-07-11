import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-HnqmSng6YZi-hd6QPp403WMGWFOdLE0",
  authDomain: "tires-dm.firebaseapp.com",
  projectId: "tires-dm",
  storageBucket: "tires-dm.appspot.com",
  messagingSenderId: "48235976284",
  appId: "1:48235976284:web:cfdc8ae09739e1d62b3899",
  measurementId: "G-K0TJSTVLKM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { storage , auth};