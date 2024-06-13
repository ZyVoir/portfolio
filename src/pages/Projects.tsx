import Footer from "../components/Footer";
import ProjectBg from "../components/ProjectBg";
import ProjectCard from "../components/ProjectCard";

import ZenithAR from "../assets/project/ZenithAR.webp";
import Unity from "../assets/carousel/Unity.webp";

import Flokemon from "../assets/project/Flokemon.webp";
import Flutter from "../assets/carousel/Flutter.webp";
import MySQL from "../assets/carousel/MySQL.webp";
import NodeJS from "../assets/carousel/Nodejs.webp";

import EMart from "../assets/project/EMart.webp";
import Firebase from "../assets/carousel/Firebase.webp";

import Willify from "../assets/project/Willify.webp";
import Figma from "../assets/carousel/Figma.webp";
import HTML from "../assets/carousel/HTML.webp";
import CSS from "../assets/carousel/CSS.webp";
import JS from "../assets/carousel/JavaScript.webp";

import PuffNPoof from "../assets/project/PuffNPoof.webp";
import Android from "../assets/carousel/Android.webp";
import Kotlin from "../assets/carousel/Kotlin.webp";
import SQLite from "../assets/carousel/SQLite.webp";

import Portfolio from "../assets/project/WebsitePortfolio.webp";
import ReactIcon from "../assets/carousel/React.webp";
import Typescript from "../assets/carousel/TypeScript.webp";
import Tailwind from "../assets/carousel/tailwind.webp";

import Rentify from "../assets/project/Rentify.webp";

import Download from "../assets/project/Download.webp";
import PortoPDF from "../../public/Portfolio.pdf";

import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { animateScroll as scroll } from "react-scroll";

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

const Projects = () => {
	const ref = useRef<HTMLDivElement>(null);
	const width = useElementWidth(ref);
	let isMobile = useMediaQuery({ query: "(max-width: 766px)" });

	let isChangeLayout = !isMobile && width < 650;

	const scrollToTop = () => {
		scroll.scrollToTop({ smooth: true });
	};

	useEffect(() => {
		scrollToTop();
	}, []);
	return (
		<>
			<section className="fixed w-full box-border h-screen top-0 left-0 overflow-hidden z-[-1]">
				<ProjectBg />
			</section>
			<div
				ref={ref}
				className="text-white md:mt-[20px] mb-[20px] p-3 md:p-5 mt-[50px] min-h-[80vh] md:mx-[50px] "
			>
				<h1 className="text-[24px] font-semibold">Projects</h1>
				<div
					className={`grid grid-cols-1 ${
						isChangeLayout ? "md:grid-cols-2" : "md:grid-cols-3"
					} gap-[35px] mt-[40px] justify-items-center`}
				>
					<ProjectCard
						image={ZenithAR}
						name={"ZenithAR"}
						tech={[Unity]}
						content={
							"a Augmented Reality to elevate your relationship experience"
						}
						layoutChange={isChangeLayout}
						link={"https://zenithar.webflow.io/"}
					/>
					<ProjectCard
						image={Flokemon}
						name={"Flokemon"}
						tech={[Flutter, MySQL, NodeJS]}
						content={
							"a application for pokemon trainers to buy and manage pokemon"
						}
						layoutChange={isChangeLayout}
						link={"https://github.com/ZyVoir/Project-MCC"}
					/>
					<ProjectCard
						image={EMart}
						name={"E-Mart"}
						tech={[Flutter, Firebase]}
						content={"an e-commerce apps to meet your everyday necessites"}
						layoutChange={isChangeLayout}
						link={"https://github.com/ZyVoir/EMart"}
					/>
					<ProjectCard
						image={Willify}
						name={"Willify"}
						tech={[Figma, HTML, CSS, JS]}
						content={
							"a Vanila web design and wireframe for music streaming platform"
						}
						layoutChange={isChangeLayout}
						link={"https://github.com/ZyVoir/Willify"}
					/>
					<ProjectCard
						image={PuffNPoof}
						name={"PuffNPoof"}
						tech={[Android, Kotlin, SQLite]}
						content={
							"a application built for dolls enthusiast to buy and manage dolls"
						}
						layoutChange={isChangeLayout}
						link={"https://github.com/ZyVoir/puffnpoof"}
					/>
					<ProjectCard
						image={Rentify}
						name={"Rentify"}
						tech={[Android, Kotlin, Firebase]}
						content={"an application to rent everyday appliances"}
						layoutChange={isChangeLayout}
						link={
							"https://www.canva.com/design/DAGH0b1sOrg/PpnlL3rC5Mqb5bfYDnpAOw/view?utm_content=DAGH0b1sOrg&utm_campaign=designshare&utm_medium=link&utm_source=editor"
						}
					/>
					<ProjectCard
						image={Portfolio}
						name={"Website Portfolio"}
						tech={[ReactIcon, Typescript, Tailwind]}
						content={"my own website to showcase my expertise"}
						layoutChange={isChangeLayout}
						link={"https://github.com/ZyVoir/Portofolio"}
					/>

					{/* to download portofolio  */}
					<ProjectCard
						image={Download}
						name={"PDF Portfolio"}
						tech={[]}
						content={""}
						layoutChange={isChangeLayout}
						link={PortoPDF}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Projects;
