import React from 'react';
import { createRoot } from 'react-dom/client';

import APP from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <APP />
    </React.StrictMode>
);

reportWebVitals();
