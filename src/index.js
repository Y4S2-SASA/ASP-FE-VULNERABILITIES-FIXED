import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tw-elements';
import PreviewFooter from './components/PreviewPage/PreviewFooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container mx-auto md:px-20">
      <App />
      <PreviewFooter />
    </div>
  </React.StrictMode>
);
