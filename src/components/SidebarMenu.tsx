import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
	icon: ReactNode;
	text: String;
	path: String;
	isMenuOpened: Boolean;
	isMobile: Boolean;
	onMenuClick?: () => void;
};

const SidebarMenu = ({
	icon,
	text,
	path,
	isMenuOpened,
	isMobile,
	onMenuClick,
}: Props) => {
	return (
		<li
			className="flex flex-col justify-center relative group"
			onClick={isMobile ? onMenuClick : () => {}}
		>
			<NavLink to={path.toString()} className={"link"}>
				{icon}
				{text}
			</NavLink>
			{!isMenuOpened && (
				<div className="w-fit h-10 bg-secondary text-white fixed left-[90px] rounded-md hidden group-hover:flex transition-opacity duration-300 px-3">
					<span
						className="
				 self-center justify-self-center text-center"
					>
						{text}
					</span>
				</div>
			)}
		</li>
	);
};

export default SidebarMenu;
