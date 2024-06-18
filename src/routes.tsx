import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Stock } from './pages/Stock.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { Welcome } from './pages/Welcome.tsx';
import { Login } from './pages/Login.tsx';
import { AuthGuard } from './components/AuthGuard.tsx';

 export const router = createBrowserRouter([
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
			{
				path: '/Stock',
				element: <Stock />,
			},
			{
				path: '/Login',
				element: <Login />,
			},
			{
				path: '/Welcome',
				element: <AuthGuard isPrivate={true}/>,
				children: [
					{
						index: true,
						element: <Welcome />,
					},
				],
			},
			
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]); 
