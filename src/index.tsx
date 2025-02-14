import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeContext from './contexts/ThemeContext';
import { inject } from '@vercel/analytics';
import { HelmetProvider } from 'react-helmet-async';

inject();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <ThemeContext>
        <App />
      </ThemeContext>
    </BrowserRouter>
  </HelmetProvider>
);
