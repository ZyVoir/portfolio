import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
	return (
		<footer className="w-full mt-[30px] text-slate-500 px-[60px] flex flex-row justify-between">
			<h1>&copy; William 2024</h1>
			<div className="flex flex-row gap-[15px]">
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
