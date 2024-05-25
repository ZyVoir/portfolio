import { FaArrowCircleRight } from "react-icons/fa";

type Props = {
	text: String;
};

const BtnPrimary = ({ text }: Props) => {
	return (
		<button className="bg-slate-800 border border-white md:hover:scale-110 flex flex-row gap-[20px] p-[15px] rounded-md hover:bg-black transition-all duration-300 w-fit">
			{text}

			<FaArrowCircleRight size={25} className="text-white" />
		</button>
	);
};

export default BtnPrimary;
