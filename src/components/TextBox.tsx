type Props = {
	text: String;
	color: String;
};
const TextBox = ({ text, color }: Props) => {
	return (
		<>
			<div className="relative group">
				<div
					className={`${color} absolute inset-0 rounded-lg blur z-[-1] opacity-50 group-hover:opacity-100 transition duration-200`}
				></div>
				<div
					className={`${color} p-[8px] rounded-md font-bold flex justify-center text-center text-wrap h-full`}
				>
					{text}
				</div>
			</div>
		</>
	);
};

export default TextBox;
