import React from "react";
import { Text, Title, Container, Paper, SimpleGrid } from "@mantine/core";
import VideoBackground from "../component/VideoBackground";
import { ActionsGrid } from "./ActionGrid";

import IconReact from "./Assets/react.svg";
import IconPhp from "./Assets/php.svg";
import IconHtml from "./Assets/html.svg";
import IconCss from "./Assets/css.svg";
import IconJS from "./Assets/javascript.svg";
import IconNext from "./Assets/next.webp";
import IconWordPress from "./Assets/wordpress.svg";
import IconFirebase from "./Assets/firebase.svg";
import IconNodejs from "./Assets/nodejs.svg";
import IconRedux from "./Assets/redux.svg";
import IconTailwind from "./Assets/tailwind.jpg";
import IconMantine from "./Assets/mantine.png";
import IconAntd from "./Assets/antd.png";

const Skills = [
	{ title: "React", src: IconReact, color: "violet" },
	{ title: "PHP", src: IconPhp, color: "indigo" },
	{ title: "HTML5", src: IconHtml, color: "blue" },
	{ title: "CSS", src: IconCss, color: "green" },
	{ title: "JavaScripts", src: IconJS, color: "teal" },
	{ title: "NextJS", src: IconNext, color: "cyan" },
	{ title: "WordPress", src: IconWordPress, color: "pink" },
	{ title: "NodeJS", src: IconNodejs, color: "indigo" },
];

const techies = [
	{ title: "Firebase", src: IconFirebase, color: "violet" },
	{ title: "Redux", src: IconRedux, color: "blue" },
	{ title: "Tailwind", src: IconTailwind, color: "green" },
	{ title: "Mantine", src: IconMantine, color: "teal" },
	{ title: "ANTD", src: IconAntd, color: "teal" },
];

const About = () => {
	const startYear = 2022;

	const currentYear = new Date().getFullYear();
	const yearsOfExperience = currentYear - startYear;

	return (
		<VideoBackground>
			<div
				style={{
					display: "flex",
					zIndex: 9999,
					justifyContent: "center",
					height: "100vh",
					backgroundColor: "rgba(0, 0, 0, 0.7)",
				}}
			>
				<div
					style={{
						padding: "20px",
						textAlign: "center",
						overflowY: "auto",
					}}
				>
					<Container
						fluid={true}
						className="about-container"
					>
						<Title
							className="about-title"
							mt={30}
							mb={20}
						>
							CREATING STUNNING VISUALS.
						</Title>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								height: "100%",
								marginBottom: 100,
								flexDirection: "column",
							}}
						>
							<Paper
								style={{ border: "1px solid" }}
								p={10}
								className="about-paper"
								bg={"transparent"}
							>
								<Text
									size="18px"
									lh={2.3}
								>
									My name is Shalom Taiwo and I'm a Frontend Developer. <br />My passion lies in creating software that is both beautiful
									and functional. I've been creating websites for over{" "}
									{yearsOfExperience} year(s) and recently started getting into
									Saas Development. Whether I'm coding a complex application or
									website, I'm always striving to create something unique and
									innovative.
								</Text>
							</Paper>
							<Paper
								style={{ border: "1px solid" }}
								p={10}
								className="about-paper"
								bg={"transparent"}
								w={"100%"}
								mt={30}
							>
								<SimpleGrid
									cols={{ base: 1, sm: 2 }}
									spacing={{ base: 10, sm: "xl" }}
								>
									<div>
										<Title
											order={3}
											style={{ borderBottom: "1px solid" }}
											pb={8}
										>
											Skills
										</Title>
										<ActionsGrid data={Skills} />
									</div>
									<div>
										<Title
											order={3}
											style={{ borderBottom: "1px solid" }}
											pb={8}
										>
											Technology
										</Title>
										<ActionsGrid data={techies} />
									</div>
								</SimpleGrid>
							</Paper>
						</div>
					</Container>
				</div>
			</div>
		</VideoBackground>
	);
};

export default About;
