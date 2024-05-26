import CSS from "../assets/carousel/CSS.png";
import Figma from "../assets/carousel/Figma.png";
import Firebase from "../assets/carousel/Firebase.png";
import Flutter from "../assets/carousel/Flutter.png";
import HTML from "../assets/carousel/HTML.png";
import JavaScript from "../assets/carousel/JavaScript.png";
import Kotlin from "../assets/carousel/Kotlin.png";
import MySQL from "../assets/carousel/MySQL.png";
import Nodejs from "../assets/carousel/Nodejs.png";
import React from "../assets/carousel/React.png";
import tailwind from "../assets/carousel/tailwind.png";
import TypeScript from "../assets/carousel/TypeScript.png";
import Unity from "../assets/carousel/Unity.png";

const LogoCarousel = () => {
	return (
		<>
			<div className="overflow-hidden py-[20px] w-full self-center whitespace-nowrap mx-0 md:m-0 z-[-1] relative">
				<div className="whitespace-nowrap inline-block animate-carousel shrink-0">
					<img loading="lazy" className="imgCarousel" src={CSS} alt="CSS" />
					<img loading="lazy" className="imgCarousel" src={Figma} alt="Figma" />
					<img
						loading="lazy"
						className="imgCarousel"
						src={Firebase}
						alt="Firebase"
					/>
					<img
						loading="lazy"
						className="imgCarousel"
						src={Flutter}
						alt="Flutter"
					/>
					<img loading="lazy" className="imgCarousel" src={HTML} alt="HTML" />
					<img
						loading="lazy"
						className="imgCarousel"
						src={JavaScript}
						alt="JavaScript"
					/>
					<img
						loading="lazy"
						className="imgCarousel"
						src={Kotlin}
						alt="Kotlin"
					/>
					<img loading="lazy" className="imgCarousel" src={MySQL} alt="MySQL" />
					<img
						loading="lazy"
						className="imgCarousel"
						src={Nodejs}
						alt="Node.js"
					/>
					<img loading="lazy" className="imgCarousel" src={React} alt="React" />
					<img
						loading="lazy"
						className="imgCarousel"
						src={tailwind}
						alt="Tailwind"
					/>
					<img
						loading="lazy"
						className="imgCarousel"
						src={TypeScript}
						alt="TypeScript"
					/>
					<img loading="lazy" className="imgCarousel" src={Unity} alt="Unity" />
				</div>
			</div>
		</>
	);
};

export default LogoCarousel;
