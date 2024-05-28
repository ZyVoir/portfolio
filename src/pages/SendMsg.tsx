import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

import Footer from "../components/Footer";

const SendMsg = () => {
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: FormEvent) => {
		e.preventDefault();
		const serviceID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
		emailjs
			.sendForm(serviceID, templateID, form.current as HTMLFormElement, {
				publicKey: publicKey,
			})
			.then(
				() => {
					toast.success(" Sent Sucessfull");
				},
				(error) => {
					toast.error("Error");
					console.log(error.text);
				}
			);
	};

	return (
		<>
			<section className="fixed w-full box-border h-screen top-0 left-0 overflow-hidden z-[-1] bg-msg"></section>
			<div className="text-white md:mt-[20px] mb-[20px] p-3 md:p-5 mt-[50px] min-h-[80vh] md:mx-[50px] ">
				<h1 className="text-[24px] font-semibold">Send Message</h1>
				<div className="mt-[30px]">
					<Toaster richColors />
					<form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="user_name"
								id="name"
								className="bg-gray-600 rounded-md p-3 focus:bg-gray-800 transition-all duration-500"
								required
								minLength={5}
							/>
						</div>
						<div className="flex flex-col gap-2 group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="user_email"
								id="email"
								className="bg-gray-600 rounded-md p-3 focus:bg-gray-800 transition-all duration-500"
								required
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="subject">Subject</label>
							<input
								type="text"
								name="subject"
								id="subject"
								className="bg-gray-600 rounded-md p-3 focus:bg-gray-800 transition-all duration-500"
								required
								minLength={5}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								className="bg-gray-600 rounded-md p-3 focus:bg-gray-800 transition-all duration-500"
								required
								minLength={10}
							/>
						</div>

						<input
							type="submit"
							value="Send"
							className="mt-[20px] p-3 rounded-md bg-gray-600 hover:bg-gray-800 hover:border hover:border-white transition-all duration-300 ease-in"
						/>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SendMsg;
