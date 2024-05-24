import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from "react-responsive";

import logo from "../assets/favicon.svg";

import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { GoBook } from "react-icons/go";
import { GoProjectRoadmap } from "react-icons/go";
import { GoBriefcase } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
	let isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const [isMenuOpened, setIsMenuOpened] = useState(!isMobile);

	const SidebarAnimation = isMobile
		? {
				open: {
					x: 0,
					width: "16rem",
					transition: {
						damping: 40,
						delay: 0,
					},
				},
				closed: {
					x: -250,
					width: "4.7rem",
					transition: {
						damping: 40,
						delay: 0,
					},
				},
		  }
		: {
				open: {
					width: "16rem",
					transition: {
						damping: 40,
					},
				},
				closed: {
					width: "4.7rem",
					transition: {
						damping: 40,
					},
				},
		  };

	useEffect(() => {
		isMobile ? setIsMenuOpened(false) : setIsMenuOpened(true);
	}, [isMobile]);

	function ToogleMenu() {
		setIsMenuOpened(!isMenuOpened);
	}

	const scrollToTop = () => {
		scroll.scrollToTop({ smooth: true });
	};

	return (
		<div>
			{/* black background */}
			<div
				onClick={() => {
					setIsMenuOpened(false);
				}}
				className={`md:hidden fixed inset-0 max-h-screen z-[98] bg-black/50 ${
					isMenuOpened ? "block" : "hidden"
				}`}
			></div>

			{/* sidebar container  */}
			<motion.div
				variants={SidebarAnimation}
				animate={isMenuOpened ? "open" : "closed"}
				className="bg-secondary text-white shadow-xl z-[99] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed
                p-[15px]"
			>
				{/* logo  */}
				<div className="flex flex-row items-center gap-2.5 font-medium border-b border-slate-300 py-3">
					<img
						src={logo}
						alt=""
						className="max-w-[50px] w-[50px] min-w-[40px] cursor-pointer"
						onClick={scrollToTop}
					/>
					{isMenuOpened && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="flex flex-col whitespace-pre"
						>
							<h1 className="text-[14px] font-bold font-bold">William</h1>
							<h2 className="text-[10px] font-light">William092@binus.ac.id</h2>
						</motion.div>
					)}
				</div>

				{/* navlinks */}

				<div className="flex flex-col h-full">
					<ul className="whitespace-pre text-[1rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden">
						<SidebarMenu
							icon={<AiOutlineHome size={25} className="min-w-max" />}
							text={"Home"}
							path={"/Portofolio/Home"}
							isMenuOpened={isMenuOpened}
						/>

						{isMenuOpened && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								className="border-b mt-4 mb-1 border-slate-300"
							>
								<small className="pl-3 text-slate-200 inline-block mb-2">
									About me
								</small>
							</motion.div>
						)}
						<SidebarMenu
							icon={<GoBook size={25} className="min-w-max" />}
							text={"Education"}
							path={"/Portofolio/Education"}
							isMenuOpened={isMenuOpened}
						/>
						<SidebarMenu
							icon={<GoBriefcase size={25} className="min-w-max" />}
							text={"Experience"}
							path={"/Portofolio/Experience"}
							isMenuOpened={isMenuOpened}
						/>
						<SidebarMenu
							icon={<GoProjectRoadmap size={25} className="min-w-max" />}
							text={"Projects"}
							path={"/Portofolio/Projects"}
							isMenuOpened={isMenuOpened}
						/>

						{isMenuOpened && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								className="border-b mt-5 mb-1 border-slate-300"
							>
								<small className="pl-3 text-slate-200 inline-block mb-2">
									Contact
								</small>
							</motion.div>
						)}
						<SidebarMenu
							icon={<FiMessageSquare size={25} className="min-w-max" />}
							text={"Send Message"}
							path={"/Portofolio/SendMsg"}
							isMenuOpened={isMenuOpened}
						/>

						{isMenuOpened && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								className="flex flex-row p-2 gap-[15px] mt-[20px]"
							>
								<a
									href="https://www.linkedin.com/in/william-whcs"
									target="_blank"
								>
									<FaLinkedin size={28}></FaLinkedin>
								</a>
								<a href="https://github.com/ZyVoir" target="_blank">
									<IoLogoGithub size={28}></IoLogoGithub>
								</a>
								<a href="https://www.instagram.com/wllyc.04_/" target="_blank">
									<FaInstagram size={28}></FaInstagram>
								</a>
							</motion.div>
						)}
					</ul>
				</div>

				{/* collapse button */}
				{!isMobile && (
					<motion.div
						animate={
							isMenuOpened
								? {
										rotate: 0,
								  }
								: {
										rotate: 180,
								  }
						}
						transition={{ duration: 0.3 }}
						className="absolute bottom-[30px] right-[20px] cursor-pointer"
						onClick={ToogleMenu}
					>
						<IoIosArrowBack className="w-7 h-auto" />
					</motion.div>
				)}
			</motion.div>

			<div
				className="m-3 md:hidden text-white "
				onClick={() => setIsMenuOpened(true)}
			>
				<LuMenu size={25} />
			</div>
		</div>
	);
};

export default Sidebar;
