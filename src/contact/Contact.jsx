import {
	Text,
	TextInput,
	Textarea,
	Button,
	Group,
	SimpleGrid,
	Container,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import classes from "./Contact.module.css";
import VideoBackground from "../component/VideoBackground";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { modals } from "@mantine/modals";

export function Contact() {
	const [captcha, setCaptcha] = useState("");

	const schema = z.object({
		name: z.string().min(2, { message: "Name should have at least 2 letters" }),
		email: z.string().email({ message: "Invalid email" }),
		subject: z
			.string()
			.min(5, { message: "Subject should have at least 5 letters" }),
		message: z
			.string()
			.min(10, { message: "Message should have at least 10 letters" }),
	});

	const form = useForm({
		validate: zodResolver(schema),
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	function onChange(value) {
		setCaptcha(value);
	}

	const handleSendMessage = (name, email, message) => {
		axios
			.post("https://getform.io/f/4c633db8-e254-4aad-8d31-938a78bad708", {
				name: name,
				email: email,
				message: message,
				"g-recaptcha-response": captcha,
			})
			.then(function () {
				modals.open({
					title: "Message sent Successfully",
					children: "Hey there, Thank you for your message!",
				});
				form.setValues({
					name: "",
					email: "",
					subject: "",
					message: "",
				});
			})
			.catch(function (response) {
				console.error(response);
			});
	};

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
					overflowY: "auto",
					overflowX: "hidden",
				}}
			>
				<Container radius="lg">
					<div className={classes.wrapper}>
						<div className={classes.contacts}>
							<Text
								fz="lg"
								fw={700}
								className={classes.title}
								c="#fff"
							>
								Contact info
							</Text>

							<ContactIconsList />
						</div>

						<form
							className={classes.form}
							onSubmit={form.onSubmit((values) =>
								handleSendMessage(values.name, values.email, values.message)
							)}
						>
							<Text
								fz="lg"
								fw={700}
								className={classes.title}
							>
								Get in touch
							</Text>

							<div className={classes.fields}>
								<SimpleGrid cols={{ base: 1, sm: 2 }}>
									<TextInput
										label="Your name"
										placeholder="Your name"
										{...form.getInputProps("name")}
									/>
									<TextInput
										label="Your email"
										placeholder="hello@example.com"
										{...form.getInputProps("email")}
									/>
								</SimpleGrid>

								<TextInput
									mt="md"
									label="Subject"
									placeholder="Subject"
									{...form.getInputProps("subject")}
								/>

								<Textarea
									mt="md"
									label="Your message"
									placeholder="Please include all relevant information"
									{...form.getInputProps("message")}
									rows={6}
								/>
								<input
									type="hidden"
									name="_gotcha"
									style={{ display: "none !important" }}
								/>

								<Group
									justify="flex-end"
									dir="column"
									mt="md"
									mb={80}
								>
									<ReCAPTCHA
										sitekey="6LefPQMdAAAAAOD0VwKvCsSdLNs9rIrmR-EWCJDk"
										onChange={onChange}
									/>
									<Button
										type="submit"
										className={classes.control}
									>
										Send message
									</Button>
								</Group>
							</div>
						</form>
					</div>
				</Container>
			</div>
		</VideoBackground>
	);
}
