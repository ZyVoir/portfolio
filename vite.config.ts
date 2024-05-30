import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { default as tailwindcss } from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "Sdist",
	},
	base: "/portfolio/",
});
