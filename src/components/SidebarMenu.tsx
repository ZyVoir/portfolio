import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
	icon: ReactNode;
	text: String;
	path: String;
	isMenuOpened: Boolean;
};

const SidebarMenu = ({ icon, text, path, isMenuOpened }: Props) => {
	console.log(window.location.pathname);
	return (
		<li className="flex flex-col justify-center relative group">
			<NavLink to={path.toString()} className={"link"}>
				{icon}
				{text}
			</NavLink>
			{!isMenuOpened && (
				<div className="flex w-fit h-10 bg-secondary text-white fixed left-[90px] rounded-md hidden group-hover:flex transition-opacity duration-300 px-3">
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
