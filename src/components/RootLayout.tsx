import { ReactNode } from "react";
import Sidebar from "./Sidebar";

type Props = {
	children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
	return (
		<div className="flex gap-5 flex-col md:flex-row">
			<Sidebar />
			<main className="max-w-5xl flex-1  py-4">{children}</main>
		</div>
	);
};

export default RootLayout;
