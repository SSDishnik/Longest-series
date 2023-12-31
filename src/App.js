import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./infoblocks/Navigation/NavigationBar";
import Home from "./pages/Home";
import Series_Personal_Info from "./pages/Series_Personal_Info";
import Series_List from "./pages/Series_List";

function App() {
	return (
		<>
			<Routes>
				<Route path="Longest-series/" element={<NavigationBar />}>
					<Route index element={<Home />} />
					<Route path="series" element={<Series_List />} />
					<Route path="series/:id" element={<Series_Personal_Info />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
