import React from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { StateContext } from './context/StateContext';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StateContext>
		<BrowserRouter>
			<Toaster />
			<App />
		</BrowserRouter>
	</StateContext>
);
