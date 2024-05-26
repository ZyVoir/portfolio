import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const ProjectBg = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async () => {}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				background: {
					color: {
						value: "#000000",
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: false, // Disable click event
						},
						onHover: {
							enable: true,
							mode: "grab", // Use grab mode for hover
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 200,
							links: {
								opacity: 0.5,
							},
						},
					},
				},
				particles: {
					color: {
						value: "#ffffff",
					},
					links: {
						color: "#ffffff",
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: true,
						speed: 2.5,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 50,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 4 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ProjectBg;
