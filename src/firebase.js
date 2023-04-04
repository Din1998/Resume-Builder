import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCQFlKIUi3MTMxbKOL88ZdoueZcbjGEq_8",
  authDomain: "resumeimg-b7e55.firebaseapp.com",
  projectId: "resumeimg-b7e55",
  storageBucket: "resumeimg-b7e55.appspot.com",
  messagingSenderId: "108535827964",
  appId: "1:108535827964:web:72b3e58c5a95e70f89f679"
};



const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)