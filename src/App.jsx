import { MantineProvider, createTheme } from "@mantine/core";
import Router from "./Routes";
import AnimatedCursor from "react-animated-cursor";
import { ModalsProvider } from "@mantine/modals";

const theme = createTheme({
	primaryColor: "cyan",
});

function App() {

	return (
		<MantineProvider
			defaultColorScheme="dark"
			theme={theme}
		>
			<ModalsProvider>
				<Router />
			</ModalsProvider>
			<AnimatedCursor />
		</MantineProvider>
	);
}

export default App;
