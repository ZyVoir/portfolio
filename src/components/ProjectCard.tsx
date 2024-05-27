type Props = {
	image: String;
	name: String;
	tech: String[];
	content: String;
	layoutChange: Boolean;
	link: String;
};

const ProjectCard = ({
	image,
	name,
	content,
	tech,
	layoutChange,
	link,
}: Props) => {
	return (
		<a href={link.toString()} target="_blank">
			<div className="col-span-1 rounded-sm h-fit relative flex group overflow-hidden cursor-pointer">
				<div className="absolute w-full h-full z-[1] bg-cardProject transition-all duration-500 ease-in-out group-hover:bg-black group-hover:opacity-60"></div>

				<img
					src={image.toString()}
					alt=""
					className="self-center w-[400px] rounded-sm object-cover  group-hover:scale-[120%] transition duration-500"
				/>
				<div
					className={`absolute bottom-0 left-0 z-[2] flex flex-col gap-2 p-[10px] ${
						!layoutChange && "group-hover:bottom-3"
					} transition-all duration-200`}
				>
					<div
						className={`flex flex-row ${
							layoutChange ? "gap-1" : "gap-2.5"
						} w-full h-auto`}
					>
						{tech.map((item, index) => (
							<img key={index} src={item.toString()} className="h-[25px]"></img>
						))}
					</div>
					<h1 className="font-bold w-[50%]">{name}</h1>
					<p className="text-[14px] text-justify">{content}</p>
				</div>
			</div>
		</a>
	);
};

export default ProjectCard;
