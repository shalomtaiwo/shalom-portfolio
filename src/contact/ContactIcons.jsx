import { Text, Box, Stack, rem } from "@mantine/core";
import { IconPhone, IconMapPin, IconAt, IconBrandTwitter, IconBrandGithub } from "@tabler/icons-react";
import classes from "./ContactIcons.module.css";

function ContactIcon({ icon: Icon, title, description, ...others }) {
	return (
		<div
			className={classes.wrapper}
			{...others}
		>
			<Box mr="md">
				<Icon style={{ width: rem(24), height: rem(24) }} />
			</Box>

			<div>
				<Text
					size="xs"
					className={classes.title}
				>
					{title}
				</Text>
				<Text className={classes.description}>{description}</Text>
			</div>
		</div>
	);
}

const MOCKDATA = [
	{ title: "Email", description: "info@shalomt.com", icon: IconAt },
	{ title: "Phone", description: "+27************", icon: IconPhone },
	{
		title: "Address",
		description: "Cape Town, South Africa",
		icon: IconMapPin,
	},
	{
		title: "Github",
		description: (
			<a
				href="https://github.com/shalomtaiwo"
				target="_blank" rel="noreferrer"
                style={{
                    color:"teal",

                }}
			>
				Github
			</a>
		),
		icon: IconBrandGithub,
	},
	{
		title: "Github",
		description: (
			<a
				href="https://twitter.com/taiwo_shalom"
				target="_blank" rel="noreferrer"
                style={{
                    color:"lightblue",

                }}
			>
				Twitter
			</a>
		),
		icon: IconBrandTwitter,
	},
];

export function ContactIconsList() {
	const items = MOCKDATA.map((item, index) => (
		<ContactIcon
			key={index}
			{...item}
		/>
	));
	return <Stack>{items}</Stack>;
}
