import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
	BrowserRouter,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Education from "./pages/Education.tsx";
import Experience from "./pages/Experience.tsx";
import Projects from "./pages/Projects.tsx";
import SendMsg from "./pages/SendMsg.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
