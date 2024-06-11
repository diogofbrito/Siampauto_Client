import { Outlet } from 'react-router-dom';
import { VehiclesProvider } from './contexts/VehiclesContext';
import { Header } from './components/Header/index';
import { AuthProvider } from './contexts/AuthContext';

function App() {
	return (
		<AuthProvider>
			<VehiclesProvider>
				<Header />
				<Outlet />
			</VehiclesProvider>
		</AuthProvider>
	);
}

export default App;
