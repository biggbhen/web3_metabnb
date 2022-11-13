import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/Home';

function App() {
	return (
		<Routes>
			<Route to='/' element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
