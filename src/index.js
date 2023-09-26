import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// core styles are required for all packages
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import '@mantine/notifications/styles.css';

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
