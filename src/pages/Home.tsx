import HomeBg from "../components/HomeBg";
import ProfilePic from "../assets/Picture1.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BtnPrimary from "../components/BtnPrimary";
import LogoCarousel from "../components/LogoCarousel";
import { Link } from "react-scroll";
import CurrentProject from "../assets/CurrentProject.png";
import Picture2 from "../assets/Picture2.jpg";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Firebase from "../assets/carousel/Firebase.png";
import Kotlin from "../assets/carousel/Kotlin.png";
import Footer from "../components/Footer";
import { useMediaQuery } from "react-responsive";
import { SiPanasonic } from "react-icons/si";

const Home = () => {
	const [text] = useTypewriter({
		words: ["Student", "Developer", "Designer"],
		loop: true,
		typeSpeed: 120,
		delaySpeed: 230,
		deleteSpeed: 80,
	});

	let isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	return (
		<>
			<section className="fixed w-full box-border h-screen top-0 left-0 overflow-hidden z-[-1]">
				<HomeBg />
			</section>
			<div className="text-white md:mt-[20px] mb-[20px] p-3 md:p-5 mt-0 min-h-screen md:mx-[50px]">
				{/* hero section */}
				<div className="h-fit  mt-[40px] md:mt-[20px] flex md:flex-row flex-col-reverse items-center justify-between gap-[15px] md:gap-0">
					<div className="flex flex-col gap-[25px] self-center text-center md:text-left items-center md:items-start">
						<p className="text-[24px] md:text-[32px] font-semibold">
							Hello there 🙌 ! The name's
						</p>
						<h1 className="text-[48px] md:text-[65px] font-poppins gradient-text font-semibold">
							William.
						</h1>
						{/* typing effect text  */}
						{isMobile && <h1 className="text-[22px] normal-case">I'm a </h1>}

						<h1 className="text-[22px] normal-case">
							{!isMobile && <span>I'm a </span>}
							<span className="gradient-text">{text}</span>
							<span>
								<Cursor />
							</span>
						</h1>

						{/* brief description */}
						<p className="max-w-[60%] self-center md:self-stretch text-center md:text-justify">
							Welcome to my portofolio. This Web Application will guide you
							through my journey as a UI/UX Designer and Mobile Developer.
						</p>

						{/* learn more button  */}
						<Link to="Aboutme" spy={true} smooth={true} offset={-50}>
							<div className="mt-[10px] w-fit">
								<BtnPrimary text={"Learn More"} />
							</div>
						</Link>
					</div>
					<img
						loading="lazy"
						src={ProfilePic}
						alt=""
						className="max-w-[40%] min-w-[250px] md:min-w-[35%]  h-auto"
					/>
				</div>
				{/* about me section  */}
				<div
					id="Aboutme"
					className="h-fit  mt-[50px] md:mt-[100px] flex md:flex-row flex-col items-center justify-between gap-[30px] md:gap-[20px]"
				>
					<img
						loading="lazy"
						src={Picture2}
						alt=""
						className="max-w-[35%] min-w-[60%] md:min-w-[230px] h-auto rounded-sm"
					/>
					<div className="flex flex-col gap-[10px] self-start text-center md:text-left items-center md:items-cebter">
						<h1 className="font-bold text-[24px] md:self-start self-center">
							About Me
						</h1>

						{/* brief description */}
						<p className="max-w-[60%] md:max-w-full self-center md:self-stretch text-center md:text-justify ">
							I'm a sophomore majoring in Mobile Application and technology. I'm
							constantly exploring the ever-evolving landscape of apps and
							interfaces. I'm always eager to learn and passionate about the
							world of codes!
						</p>

						{/* social media links */}
						<h2 className="text-[18px] mt-[5px] md:self-start self-center underline underline-offset-4">
							Let's Connect!
						</h2>
						<div className="flex flex-row gap-[15px]  md:self-start self-center">
							<a
								href="https://www.linkedin.com/in/william-whcs"
								target="_blank"
							>
								<FaLinkedin size={35}></FaLinkedin>
							</a>
							<a href="https://github.com/ZyVoir" target="_blank">
								<IoLogoGithub size={35}></IoLogoGithub>
							</a>
							<a href="https://www.instagram.com/wllyc.04_/" target="_blank">
								<FaInstagram size={35}></FaInstagram>
							</a>
						</div>
					</div>
				</div>

				{/* current project highlight */}
				<div className="mt-[80px] flex flex-col gap-[20px] relative">
					<h1 className="font-bold text-[24px] md:self-start self-center z-[-2]">
						Currently Working on
					</h1>
					<div className="flex flex-col items-center relative z-[-1]">
						<div className="md:absolute md:top-0 md:left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-950 rounded-md z[-3]"></div>
						<img
							loading="lazy"
							src={CurrentProject}
							alt=""
							className="max-w-full min-w-[250px] mx-[20px] md:mx-0 md:w-full md:min-w-[35%] h-auto rounded-md z-[-2]"
						/>
					</div>

					<h1 className="text-[16px] md:text-[22px] self-center md:self-start md:absolute md:bottom-[100px] md:left-[25px] z-[1]">
						Rentify
					</h1>
					<div className="flex flex-row w-[fit] gap-[20px] rounded-md bg-secondary p-[8px] pr-[15px] self-center md:self-start md:absolute md:bottom-[20px] md:left-[25px] z-[1]">
						<img className="h-[50px]" src={Kotlin} alt="" loading="lazy" />
						<img className="h-[50px]" src={Firebase} alt="" loading="lazy" />
					</div>
				</div>

				{/* tech stacks logo  */}
				<div className="mt-[80px] flex flex-col gap-[20px]">
					<h1 className="font-bold text-[24px] md:self-start self-center">
						Tech Stacks
					</h1>
					<LogoCarousel />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
