import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCLaRtXNleBIntDH6h3xhXVqA2MAfHX5NQ",
  authDomain: "cadastro-login-65e66.firebaseapp.com",
  projectId: "cadastro-login-65e66",
  storageBucket: "cadastro-login-65e66.appspot.com",
  messagingSenderId: "419608520204",
  appId: "1:419608520204:web:384a729bd22972fe2c7029"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);