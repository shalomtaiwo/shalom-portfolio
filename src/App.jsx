import { MantineProvider, createTheme } from "@mantine/core";
import Router from "./Routes";
import AnimatedCursor from "react-animated-cursor";
import { useState } from "react";
import { ModalsProvider } from "@mantine/modals";

const theme = createTheme({
	primaryColor: "cyan",
});

function App() {
	const [loading, setLoading] = useState(false);

	return (
		<MantineProvider
			defaultColorScheme="dark"
			theme={theme}
		>
			<ModalsProvider>
				{loading ? <div>Loading</div> : <Router />}
			</ModalsProvider>
			<AnimatedCursor />
		</MantineProvider>
	);
}

export default App;
