import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { LanguageProvider } from './utils/language';

const App = () => {
  return (
    <React.StrictMode>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
// https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/
if (!rootElement) throw new Error('Failed to find the root element');
ReactDOM.createRoot(rootElement).render(<App />);
