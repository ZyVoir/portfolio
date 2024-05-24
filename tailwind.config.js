/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				teachers: ["Teachers", "serif"],
			},
			colors: {
				primary: "#0E0E0E",
				secondary: "#242527",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
