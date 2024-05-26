import Footer from "../components/Footer";

const SendMsg = () => {
	return (
		<>
			<section className="fixed w-full box-border h-screen top-0 left-0 overflow-hidden z-[-1] bg-msg"></section>
			<div className="text-white md:mt-[20px] mb-[20px] p-3 md:p-5 mt-[50px] min-h-[80vh] md:mx-[50px] ">
				<h1 className="text-[24px] font-semibold">Send Message</h1>
				<div></div>
			</div>
			<Footer />
		</>
	);
};

export default SendMsg;
