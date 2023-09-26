import React from "react";
import { Paper } from "@mantine/core";

const VideoBackground = ({ children }) => {
	return (
		<Paper
			w={"100vw"}
			h={"100vh"}
			style={{
				position: "relative",
				overflow: "hidden",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<video
				src="https://res.cloudinary.com/dg8os5pul/video/upload/v1695722181/background-hero_yqc28h.mp4"
				autoPlay={true}
				loop={true}
				muted={true}
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
				}}
			/>
			{/* Overlay */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
				}}
			></div>
			{children}
		</Paper>
	);
};

export default VideoBackground;
