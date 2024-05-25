import { transform } from "typescript";

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
			boxShadow: {
				star: "0 0 0 4px rgba(255,255,255,0.1), 0 0 0 8px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,1)",
			},
			backgroundImage: {
				star: "linear-gradient(90deg, #fff, transparent)",
			},
			keyframes: {
				star: {
					"0%": {
						transform: "rotate(315deg) translateX(0)",
						opacity: 1,
					},
					"70%": {
						opacity: 1,
					},
					"100%": {
						transform: "rotate(315deg) translateX(-1000px)",
						opacity: 0,
					},
				},
				carousel: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
			},
			animation: {
				star1: "star 3s linear infinite",
				star2: "star 3s linear infinite",
				star3: "star 2s linear infinite",
				star4: "star 1.5s linear infinite",
				star5: "star 2.5s linear infinite",
				star6: "star 3s linear infinite",
				star7: "star 1.75s linear infinite",
				star8: "star 2.3s linear infinite",
				star9: "star 1.9s linear infinite",
				star10: "star 2.75s linear infinite",
				carousel: "carousel 5s linear infinite",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
