import HomeBg from "../components/HomeBg";
import BtnPrimary from "../components/BtnPrimary";
import LogoCarousel from "../components/LogoCarousel";

import ProfilePic from "../assets/Picture1.webp";
import CurrentProject from "../assets/CurrentProject.webp";
import Picture2 from "../assets/Picture2.webp";

import Firebase from "../assets/carousel/Firebase.webp";
import Kotlin from "../assets/carousel/Kotlin.webp";
import Footer from "../components/Footer";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import React, { useEffect, useRef, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import pdfCV from "../../public/CV.pdf";

const useElementWidth = (ref: React.RefObject<HTMLDivElement>): number => {
	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
		const element = ref.current;

		if (!element) return;

		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				setWidth(entry.contentRect.width);
			}
		});

		resizeObserver.observe(element);

		return () => {
			resizeObserver.unobserve(element);
			resizeObserver.disconnect();
		};
	}, []);

	return width;
};

const Home = () => {
	const [text] = useTypewriter({
		words: ["Student", "Developer", "Designer"],
		loop: true,
		typeSpeed: 120,
		delaySpeed: 230,
		deleteSpeed: 80,
	});
	const ref = useRef<HTMLDivElement>(null);
	const width = useElementWidth(ref);
	let isChange = useMediaQuery({ query: "(max-width: 766px)" });

	let isChangeLayout = !isChange && width < 650;
	let isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	const scrollToTop = () => {
		scroll.scrollToTop({ smooth: true });
	};

	useEffect(() => {
		scrollToTop();
	}, []);

	return (
		<>
			<section className="fixed w-full box-border h-screen top-0 left-0 overflow-hidden z-[-1]">
				<HomeBg />
			</section>
			<div
				ref={ref}
				className="text-white md:mt-[20px] mb-[20px] p-3 md:p-5 mt-0 min-h-screen md:mx-[50px]"
			>
				{/* hero section */}
				<div
					className={`h-fit  mt-[40px] md:mt-[20px] flex ${
						isChangeLayout
							? "flex-col-reverse gap-[40px] "
							: "md:flex-row md:gap-0"
					} flex-col-reverse items-center justify-between gap-[15px] `}
				>
					<div
						className={`flex flex-col gap-[25px] self-center   ${
							isChangeLayout || isMobile
								? "text-center items-center"
								: "md:text-left md:items-start"
						} `}
					>
						<p className="text-[24px] md:text-[32px] font-semibold">
							Hello there 🙌 ! The name's
						</p>
						<h1 className="text-[48px] md:text-[65px] font-poppins gradient-text font-semibold ">
							William.
						</h1>
						{/* typing effect text  */}
						{isMobile && <h1 className="text-[22px] normal-case">I'm a </h1>}

						<h1 className="text-[22px] normal-case">
							{!isMobile && <span>I'm a </span>}
							<span className="gradient-text">{text}</span>
							<span>
								<Cursor />
							</span>
						</h1>

						{/* brief description */}
						<p
							className={`max-w-[60%] ${
								isChangeLayout || isMobile
									? "self-center text-center"
									: "md:self-stretch md:text-justify"
							}    `}
						>
							Welcome to my portfolio. This Web Application will guide you
							through my journey as a UI/UX Designer and Mobile Developer.
						</p>

						{/* learn more button  */}
						<Link to="Aboutme" spy={true} smooth={true} offset={-50}>
							<div className="mt-[10px] w-fit">
								<BtnPrimary
									text={"Learn More"}
									logo={<FaArrowCircleRight size={25} className="text-white" />}
								/>
							</div>
						</Link>
					</div>
					<div className="relative w-full h-auto flex flex-row justify-center group">
						<div className="absolute inset-0.5 rounded-full bg-yellow-300 z-[-1] blur-2xl opacity-20 group-hover:opacity-50 transition duration-300"></div>
						<img
							src={ProfilePic}
							alt=""
							className="max-w-[75%] md:max-w-[80%] min-w-[20%] md:min-w-[70%] self-center h-auto"
						/>
					</div>
				</div>
				{/* about me section  */}
				<div
					id="Aboutme"
					className="h-fit  mt-[50px] md:mt-[100px] flex md:flex-row flex-col items-center justify-between gap-[30px] md:gap-[20px]"
				>
					<img
						src={Picture2}
						alt=""
						className="max-w-[35%] min-w-[60%] md:min-w-[230px] h-auto rounded-sm"
					/>
					<div className="flex flex-col gap-[10px] self-start text-center md:text-left items-center md:items-cebter">
						<h1 className="font-bold text-[24px] md:self-start self-center">
							About Me
						</h1>

						{/* brief description */}
						<p className="max-w-[60%] md:max-w-full self-center md:self-stretch text-center md:text-justify ">
							I'm a sophomore majoring in Mobile Application and technology. I'm
							constantly exploring the ever-evolving landscape of apps and
							interfaces. I'm always eager to learn and passionate about the
							world of codes!
						</p>

						{/* social media links */}
						<h2 className="text-[18px] mt-[5px] md:self-start self-center underline underline-offset-4">
							Let's Connect!
						</h2>
						<div className="flex flex-row gap-[15px]  md:self-start self-center">
							<a
								href="https://www.linkedin.com/in/william-whcs"
								target="_blank"
							>
								<FaLinkedin size={35}></FaLinkedin>
							</a>
							<a href="https://github.com/ZyVoir" target="_blank">
								<IoLogoGithub size={35}></IoLogoGithub>
							</a>
							<a href="https://www.instagram.com/wllyc.04_/" target="_blank">
								<FaInstagram size={35}></FaInstagram>
							</a>
						</div>
					</div>
				</div>

				{/* download cv */}
				<a
					className="flex flex-row justify-center self-center mt-[30px]"
					href={pdfCV}
					target="_blank"
				>
					<BtnPrimary
						text={"View CV"}
						logo={<MdDownload size={25} className="text-white" />}
					></BtnPrimary>
				</a>

				{/* current project highlight */}
				<div className="mt-[80px] flex flex-col gap-[20px] relative">
					<h1 className="font-bold text-[24px] md:self-start self-center z-[-2]">
						Currently Working on
					</h1>
					<div className="flex flex-col items-center relative z-[-1]">
						<div className="md:absolute md:top-0 md:left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-950 rounded-md z[-3]"></div>
						<img
							src={CurrentProject}
							alt=""
							className="max-w-full min-w-[250px] mx-[20px] md:mx-0 md:w-full md:min-w-[35%] h-auto rounded-md z-[-2]"
						/>
					</div>

					<h1 className="text-[16px] md:text-[22px] self-center md:self-start md:absolute md:bottom-[100px] md:left-[25px] z-[1]">
						Rentify
					</h1>
					<div className="flex flex-row w-[fit] gap-[20px] rounded-md bg-secondary p-[8px] pr-[15px] self-center md:self-start md:absolute md:bottom-[20px] md:left-[25px] z-[1]">
						<img className="h-[50px]" src={Kotlin} alt="" />
						<img className="h-[50px]" src={Firebase} alt="" />
					</div>
				</div>

				{/* tech stacks logo  */}
				<div className="mt-[80px] flex flex-col gap-[20px]">
					<h1 className="font-bold text-[24px] md:self-start self-center">
						Tech Stacks
					</h1>
					<LogoCarousel />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
