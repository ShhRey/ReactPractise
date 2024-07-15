import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Context for a group of Components
export const AppContext = createContext();

function App() {
	// Creating states for Default and Changeable Usernames
	const [userName, setUserName] = useState("ShhRey");

	return (
		<div className="App">
			{/* Will be providing data to Components */}
			<AppContext.Provider value={{ userName, setUserName }}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<h1>Page Not Found</h1>} />
					</Routes>
				</Router>
			</AppContext.Provider>
		</div>
	);
}

export default App;