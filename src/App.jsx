import "./assets/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import NotFound from "./pages/404";
import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
