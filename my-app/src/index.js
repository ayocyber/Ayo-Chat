import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContex';
import { ChatContextProvider } from './Context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>

);
