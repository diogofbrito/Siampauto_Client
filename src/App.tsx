import { Outlet, useNavigate } from 'react-router-dom';
import { VehiclesProvider } from './contexts/VehiclesContext';
import { NextUIProvider } from '@nextui-org/react';
import { Header } from './components/Header/Header';
import { AuthProvider } from './contexts/AuthContext';

function App() {
	const navigate = useNavigate();

	return (
		<NextUIProvider navigate={navigate}>
			<AuthProvider>
				<VehiclesProvider>
					<Header />
						<Outlet />
				</VehiclesProvider>
			</AuthProvider>
		</NextUIProvider>
	);
}

export default App;
