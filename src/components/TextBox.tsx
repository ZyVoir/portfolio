type Props = {
	text: String;
	color: String;
};
const TextBox = ({ text, color }: Props) => {
	return (
		<>
			<div
				className={`${color} p-[8px] rounded-sm font-bold flex justify-center text-center text-wrap`}
			>
				{text}
			</div>
		</>
	);
};

export default TextBox;
