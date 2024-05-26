import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
	return (
		<footer className="w-full mt-[30px] mb-[15px] text-gray-400 px-[20px] md:px-[60px] flex flex-row justify-between items-center">
			<div>
				<h1 className="text-[17px] md:text-[20px] align-middle">
					&copy; William 2024
				</h1>

				<h1 className="md:text-[16px] hidden md:inline-block normal-case">
					Build with React (TS) and Tailwind CSS
				</h1>
			</div>

			<div className="flex flex-row md:gap-[15px] gap-[12px]">
				<a href="https://www.linkedin.com/in/william-whcs" target="_blank">
					<FaLinkedin size={30}></FaLinkedin>
				</a>
				<a href="https://github.com/ZyVoir" target="_blank">
					<IoLogoGithub size={30}></IoLogoGithub>
				</a>
				<a href="https://www.instagram.com/wllyc.04_/" target="_blank">
					<FaInstagram size={30}></FaInstagram>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
