import {
	Card,
	Text,
	SimpleGrid,
	UnstyledButton,
    Image,
} from "@mantine/core";
import classes from "./ActionsGrid.module.css";


export function ActionsGrid({data}) {

	const items = data?.map((item) => (
		<UnstyledButton
			key={item.title}
			className={classes.item}
		>
			<Image src={item.src}  alt={item.title} w={60} />
			<Text
				size="xs"
				mt={7}
			>
				{item.title}
			</Text>
		</UnstyledButton>
	));

	return (
		<Card
			radius="md"
			className={classes.card}
		>
			<SimpleGrid
				cols={3}
				mt="md"
			>
				{items}
			</SimpleGrid>
		</Card>
	);
}
