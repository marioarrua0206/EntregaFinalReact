import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./context/ItemsContext";
import App from './App.jsx';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_API_KEY,
  authDomain: import.meta.env.REACT_APP_AUTHDOMAIN,
  projectId: import.meta.env.REACT_APP_PROJECTID,
  storageBucket: import.meta.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.REACT_APP_REACT_APP_SENDERID,
  appId: import.meta.env.REACT_APP_REACT_APP_APPID,
  measurementId: import.meta.env.REACT_APP_REACT_APP_MID,
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
