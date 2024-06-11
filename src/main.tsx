import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { router } from './routes';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	
	<NextUIProvider>
		<RouterProvider router={router} />
	</NextUIProvider>,
);
