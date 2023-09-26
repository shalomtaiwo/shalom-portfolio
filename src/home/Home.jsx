import React from "react";
import VideoBackground from "../component/VideoBackground";

const Home = () => {
	const name = "SHALOM";
	const [typedName, setTypedName] = React.useState("");

	React.useEffect(() => {
		let currentLetter = 0;
		let typingInterval;

		const startTyping = () => {
			typingInterval = setInterval(() => {
				if (currentLetter <= name.length) {
					setTypedName(name.slice(0, currentLetter));
					currentLetter++;
				} else {
					clearInterval(typingInterval);
					setTimeout(() => {
						setTypedName("");
						currentLetter = 0;
						startTyping();
					}, 2000); // Wait for 2 seconds before starting again
				}
			}, 100);
		};

		startTyping();

		return () => {
			clearInterval(typingInterval);
		};
	}, []);

	return (
		<VideoBackground>
			<div style={{ zIndex: 9999 }}>
				<h1 style={{ fontSize: "3rem", color: "white", marginTop: -60 }}>
					{typedName}
				</h1>
			</div>
		</VideoBackground>
	);
};

export default Home;
