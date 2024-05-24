import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import SendMsg from "./pages/SendMsg";

function App() {
	return (
		<RootLayout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Education" element={<Education />} />
				<Route path="/Experience" element={<Experience />} />
				<Route path="/Projects" element={<Projects />} />
				<Route path="/SendMsg" element={<SendMsg />} />
			</Routes>
		</RootLayout>
	);
}

export default App;
