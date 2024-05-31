import { createHashRouter } from 'react-router-dom';
import App from './App.tsx';
import { Home } from './pages/Home/index.tsx';
import { About } from './pages/About/index.tsx';

export const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			
			{
				path: '/Sobre',
				element: <About />,
			},
		],
	},
]);
