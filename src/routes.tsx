import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Stock } from './pages/Stock.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { Welcome } from './pages/Welcome.tsx';
import { AreaReservada } from './pages/Login.tsx';
import { AuthGuard } from './components/AuthGuard.tsx';
import { Teste } from './pages/Teste.tsx';
import { CarPage } from './pages/CarPage.tsx';

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
				element: <AuthGuard isPrivate={false} />,
				children: [
					{
						index: true,
						element: <About />,
					},
				],
			},
			{
				path: '/Stock',
				element: <AuthGuard isPrivate={false} />,
				children: [
					{
						index: true,
						element: <Stock />,
					},
				],
			},
			{
				path: '/Stock/:id',
				element: <AuthGuard isPrivate={false} />,
				children: [
					{
						index: true,
						element: <CarPage />,
					},
				],
			},
			{
				path: '/Entrar',
				element: <AuthGuard isPrivate={false} />,
				children: [
					{
						index: true,
						element: <AreaReservada />,
					},
				],
			},
			{
				path: '/Welcome',
				element: <AuthGuard isPrivate={true} />,
				children: [
					{
						index: true,
						element: <Welcome />,
					},
				],
			},
			{
				path: '/Teste',
				element: <AuthGuard isPrivate={true} />,
				children: [
					{
						index: true,
						element: <Teste />,
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
