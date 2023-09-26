import React from "react";
import { Text, Title, Container } from "@mantine/core";
import VideoBackground from "../component/VideoBackground";
import { Carousel } from "@mantine/carousel";

const portfolioData = [
	{
		image:
			"https://res.cloudinary.com/dg8os5pul/image/upload/v1695729494/Screenshot_2023-09-26_135800_nrbhaa.png",
		title: "HisolPublisher",
	},
	{
		image:
			"https://res.cloudinary.com/dg8os5pul/image/upload/v1695730100/Screenshot_2023-09-26_140806_o74fm8.png",
		title: "Peaceful Nature",
	},
	{
		image:
			"https://res.cloudinary.com/dg8os5pul/image/upload/v1695730224/Screenshot_2023-09-26_140959_w1t8pn.png",
		title: "Devllo Plugins",
	},
	{
		image:
			"https://res.cloudinary.com/dg8os5pul/image/upload/v1695730344/Screenshot_2023-09-26_141207_rxqlhx.png",
		title: "Smart Moving",
	},
	{
		image:
			"https://res.cloudinary.com/dg8os5pul/image/upload/v1695732322/icon-256x256_jpqjwj.png",
		title: "Book Preview Plugin",
	},
	{
		image:
			"https://res.cloudinary.com/dg8os5pul/image/upload/v1695731745/Screenshot_2023-09-26_143530_f0yvbm.png",
		title: "DevKonet",
	},
];

const Portfolio = () => {
	return (
		<VideoBackground>
			<div
				style={{
					display: "flex",
					zIndex: 999,
					justifyContent: "center",
					height: "100vh",
					width: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.7)",
				}}
			>
				<Container
					fluid={true}
					mt={0}
				>
					<Title
						size={30}
						style={{ margin: "30px 0" }}
					>
						PORTFOLIOS
					</Title>

					<div style={{ display: "flex", alignItems: "center", height: '70%'}}>
						<Container mt={30} fluid={true}>
							<Carousel
								height={500}
								maw={850}
								slideSize={{ base: "100%", sm: "70%", md: "50%" }}
								slideGap={'md'}
								loop
								align="start"
							>
								{portfolioData.map((item, index) => (
									<Carousel.Slide key={index}>
										<div
											style={{
												padding: "20px",
												backgroundColor: "rgba(255, 255, 255, 0.1)",
												borderRadius: "10px",
												textAlign: "center",
											}}
										>
											<img
												src={item.image}
												alt={`Portfolio Item ${index + 1}`}
												className="portfolio-img"
											/>
											<Text
												size="18px"
												weight={700}
												style={{ marginTop: "10px" }}
												c={"white"}
											>
												{item.title}
											</Text>
										</div>
									</Carousel.Slide>
								))}
							</Carousel>
						</Container>
					</div>
				</Container>
			</div>
		</VideoBackground>
	);
};

export default Portfolio;
