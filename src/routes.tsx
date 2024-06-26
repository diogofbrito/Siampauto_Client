import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Stock } from './pages/Stock.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { Welcome } from './pages/Welcome.tsx';
import { AreaReservada } from './pages/Login.tsx';
import { AuthGuard } from './components/AuthGuard.tsx';
import { VehiclePage } from './pages/VehiclePage.tsx';
import { ProfileUser } from './pages/ProfileUser.tsx';
import { Services } from './pages/Services.tsx';

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
						element: <VehiclePage />,
					},
				],
			},
			{
				path: '/Servicos',
				element: <AuthGuard isPrivate={false} />,
				children: [
					{
						index: true,
						element: <Services />,
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
				path: '/Perfil',
				element: <AuthGuard isPrivate={true} />,
				children: [
					{
						index: true,
						element: <ProfileUser />,
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
