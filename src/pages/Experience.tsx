import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
const Experience = () => {
	return (
		<>
			<section className="fixed w-full box-border h-screen top-0 left-0 overflow-hidden z-[-1] bg-exp"></section>
			<div className="text-white md:mt-[20px] mb-[20px] p-3 md:p-5 mt-[50px] min-h-[80vh] md:mx-[50px] ">
				<h1 className="text-[24px] font-semibold">Experience</h1>
				<Accordion
					title={"Part Time Graphic Designer"}
					content={[
						"Conceptualizing and creating visually appealing designs for various platforms and mediums",
						"Collaborating with clients or team members to understand design requirements and objectives",
						"Utilizing design software such as Adobe Creative Suite (Photoshop, Illustrator) to execute design projects",
					]}
					header={"CV. Vicmic Indonesia"}
					subheader={"May 2023 - Oct. 2023"}
				/>
				<Accordion
					title={"Vice Chairman Division of Arts"}
					content={[
						"Propose and create reports along with budgeting for art-themed events in schools with colleagues",
						"Coordinates 9 fellow members to recapitulate and inventory student council work equipment",
						"Evaluate the performance of each member to maintain the productivity of the arts sector",
					]}
					header={"SMA Bunda Hati Kudus"}
					subheader={"Dec. 2020 - Jan. 2021"}
				/>

				<h1 className="text-[24px] font-semibold mt-[40px]">Organization</h1>
				<Accordion
					title={"Member of Data Science Club"}
					content={["Learning Machine Model through video based learning"]}
					header={"Bina Nusantara University"}
					subheader={"Mar 2023 - Present"}
				/>
			</div>
			<Footer />
		</>
	);
};

export default Experience;
