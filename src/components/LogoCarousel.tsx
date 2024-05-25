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
			<div className="overflow-hidden py-[20px] w-full self-center whitespace-nowrap mx-0 md:m-0">
				<div className="whitespace-nowrap inline-block animate-carousel">
					<img className="imgCarousel" src={CSS} alt="CSS" />
					<img className="imgCarousel" src={Figma} alt="Figma" />
					<img className="imgCarousel" src={Firebase} alt="Firebase" />
					<img className="imgCarousel" src={Flutter} alt="Flutter" />
					<img className="imgCarousel" src={HTML} alt="HTML" />
					<img className="imgCarousel" src={JavaScript} alt="JavaScript" />
					<img className="imgCarousel" src={Kotlin} alt="Kotlin" />
					<img className="imgCarousel" src={MySQL} alt="MySQL" />
					<img className="imgCarousel" src={Nodejs} alt="Node.js" />
					<img className="imgCarousel" src={React} alt="React" />
					<img className="imgCarousel" src={tailwind} alt="Tailwind" />
					<img className="imgCarousel" src={TypeScript} alt="TypeScript" />
					<img className="imgCarousel" src={Unity} alt="Unity" />
				</div>
			</div>
		</>
	);
};

export default LogoCarousel;
