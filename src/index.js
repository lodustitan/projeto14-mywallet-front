import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactRoutes from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ReactRoutes />
	</React.StrictMode>
);
