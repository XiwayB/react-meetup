import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

ReactDom.render(
    <FavoritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoritesContextProvider>,
document.getElementById('root')
);

