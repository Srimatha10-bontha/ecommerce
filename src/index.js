import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShopcontextProvider from './Context/Shopcontext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ShopcontextProvider>
  <App/>
 </ShopcontextProvider>
);
