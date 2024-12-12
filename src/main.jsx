import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./context/ItemsContext";
import App from './App.jsx';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_SENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider>
    <App />
    </Provider>
    
  </StrictMode>,
)
