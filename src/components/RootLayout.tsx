import { ReactNode } from "react";
import Sidebar from "./Sidebar";

type Props = {
	children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
	return (
		<div className="flex gap-0 flex-col md:flex-row md:gap-0 md:items-start">
			<Sidebar />
			<main className="flex-1 py-4">{children}</main>
		</div>
	);
};

export default RootLayout;
