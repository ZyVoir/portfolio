import { ReactNode } from "react";

type Props = {
	text: String;
	logo: ReactNode;
};

const BtnPrimary = ({ text, logo }: Props) => {
	return (
		<button className="bg-slate-800 border border-white md:hover:scale-110 flex flex-row gap-[15px] p-[15px] rounded-md hover:bg-black transition-all duration-300 w-fit">
			{text}
			{logo}
		</button>
	);
};

export default BtnPrimary;
