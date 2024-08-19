import EduBg from "../components/EduBg";
import Footer from "../components/Footer";
import TextBox from "../components/TextBox";

import BHK from "../assets/education/BHK.webp";
import Binus from "../assets/education/Binus.svg";

import React, { useEffect, useRef, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import { useMediaQuery } from "react-responsive";

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

const Education = () => {
	const scrollToTop = () => {
		scroll.scrollToTop({ smooth: true });
	};

	useEffect(() => {
		scrollToTop();
	}, []);

	const ref = useRef<HTMLDivElement>(null);
	const width = useElementWidth(ref);
	let isMobile = useMediaQuery({ query: "(max-width: 766px)" });

	let isChangeLayout = !isMobile && width < 650;

	return (
		<>
			<section className="fixed w-full box-border h-screen top-0 left-0 overflow-hidden z-[-1] ">
				<EduBg />
			</section>
			<div
				ref={ref}
				className="text-white md:mt-[20px] mb-[20px] p-3 md:p-5 mt-[50px] min-h-[80vh] md:mx-[50px] "
			>
				<h1 className="text-[24px] font-semibold">Education</h1>

				{/* education grid  */}
				<div
					className={`grid ${
						isChangeLayout ? "md:grid-cols-1" : "md:grid-cols-2"
					} gap-[25px] mt-[25px]`}
				>
					{/* Binus section  */}
					<div className="md:h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 grid md:grid-rows-2  gap-[10px] items-center px-[20px] pb-[15px]">
						<div className="grid sm:grid-cols-3">
							<img src={Binus} alt="" className="w-[250px] col-span-1" />
							<div className="col-span-2 flex flex-col items-start justify-center">
								<h1 className="h-fit">Bina Nusantara University</h1>
								<h2 className="h-fit">2022 - Present</h2>
							</div>
						</div>

						<div className="grid grid-rows-2 gap-[10px]">
							<TextBox
								color={"bg-teal-400"}
								text={"Mobile Application and technology"}
							/>

							<div className="grid grid-cols-2 gap-[10px] ">
								<TextBox color={"bg-blue-500"} text={"5th Semester"} />
								<TextBox color={"bg-green-400"} text={"CGPA : 3.96 / 4.00"} />
							</div>
						</div>
					</div>
					{/* bhk section  */}
					<div className="md:h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 grid md:grid-rows-2 gap-[20px] md:gap-[10px] items-center px-[20px] pb-[15px] pt-[35px]">
						<div className="grid sm:grid-cols-3 gap-[15px]">
							<img src={BHK} alt="" className="w-[200px] col-span-1" />
							<div className="col-span-2 flex flex-col items-start justify-center">
								<h1 className="h-fit">SMA Bunda Hati Kudus</h1>
								<h2 className="h-fit">2019 - 2022</h2>
							</div>
						</div>
						<div className="grid grid-rows-2 gap-[10px] ">
							<TextBox color={"bg-rose-600"} text={"Ilmu Pengetahuan Alam"} />
							<TextBox color={"bg-yellow-500"} text={"Valedictorian"} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Education;
