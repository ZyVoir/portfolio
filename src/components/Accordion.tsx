import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";

type Props = {
	title: String;
	header: String;
	subheader: String;
	content: String[];
};

const Accordion = ({ title, header, subheader, content }: Props) => {
	const [isAccordionOpen, setIsAccordionOpen] = useState(false);

	function toggleAccordion() {
		setIsAccordionOpen(!isAccordionOpen);
	}

	return (
		<div className="flex flex-col items-center">
			<div
				className="mt-[40px] p-[10px] md:p-[20px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex flex-row justify-between items-center w-full cursor-pointer"
				onClick={toggleAccordion}
			>
				<h1 className="text-[18px] font-bold normal-case">{title}</h1>
				<motion.div
					animate={
						isAccordionOpen
							? {
									rotate: 180,
							  }
							: {
									rotate: 0,
							  }
					}
					transition={{ duration: 0.3 }}
				>
					<IoIosArrowDown size={20} />
				</motion.div>
			</div>

			<AnimatePresence initial={false}>
				{isAccordionOpen && (
					<motion.div
						initial={{ opacity: 0, marginTop: 0 }}
						animate={{ height: "auto", opacity: 1, marginTop: "10px" }}
						exit={{ opacity: 0, marginTop: 0 }}
						transition={{ duration: 0.3 }}
						className="overflow-hidden p-[10px] md:p-[20px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 w-full flex flex-col gap-5"
					>
						<h2 className="font-semibold text-[16px] normal-case">{header}</h2>
						<h2 className="normal-case">{subheader}</h2>
						<ul className="flex flex-col gap-[40px] md:gap-[20px] mt-[20px] md:mt-[10px]">
							{content.map((item, index) => (
								<li key={index} className="">
									<div className="flex flex-col md:flex-row items-center gap-[10px] md:gap-[15px] sm:text-justify text-center">
										<CiCircleCheck size={25} className="text-white" />
										{item}
									</div>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Accordion;
