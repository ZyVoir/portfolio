import Footer from "../components/Footer";
import ProjectBg from "../components/ProjectBg";

const Projects = () => {
	return (
		<>
			<section className="fixed w-full box-border h-screen top-0 left-0 overflow-hidden z-[-1]">
				<ProjectBg />
			</section>
			<div className="text-white md:mt-[20px] mb-[20px] p-3 md:p-5 mt-0 min-h-screen md:mx-[50px]">
				<div></div>
			</div>
			<Footer />
		</>
	);
};

export default Projects;
