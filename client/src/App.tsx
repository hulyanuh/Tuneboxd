import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Genres from "./pages/Discovery/Genres";
import Discovery from "./pages/Discovery/Discovery";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route index element={<Dashboard />} />
				<Route path="discovery" element={<Discovery />} />
				<Route path="discovery/genres" element={<Genres />} />
			</Route>
		</Routes>
	);
}

export default App;
