import { Outlet } from 'react-router-dom';
import { VehiclesProvider } from './contexts/VehiclesContext';
import { FiltersProvider } from './contexts/SearchFilterContext';
import { Header } from './components/Header/index';

function App() {
	return (
		<FiltersProvider>
			<VehiclesProvider>
				<Header />
				<Outlet />
			</VehiclesProvider>
		</FiltersProvider>
	);
}

export default App;
