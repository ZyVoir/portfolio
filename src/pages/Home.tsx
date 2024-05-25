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

const Home = () => {
	const [text] = useTypewriter({
		words: [
			"a Designer",
			"a Developer",
			"a Mobile Enthusiast",
			"an Undergraduate Student",
		],
		loop: true,
		typeSpeed: 120,
		delaySpeed: 230,
		deleteSpeed: 80,
	});
	return (
		<>
			<section className="fixed w-full box-border h-screen top-0 left-0 overflow-hidden z-[-1]">
				<HomeBg />
			</section>
			<div className="text-white md:mt-[20px] mb-[20px] p-3 md:p-5 mt-0 min-h-screen md:mx-[50px]">
				{/* hero section */}
				<div className="h-fit  mt-[40px] md:mt-[20px] flex md:flex-row flex-col-reverse items-center justify-between gap-[30px] md:gap-0">
					<div className="flex flex-col gap-[25px] self-center text-center md:text-left items-center md:items-start">
						<p className="text-[24px] md:text-[32px] font-semibold">
							Hello there 🙌 ! The name's
						</p>
						<h1 className="text-[48px] md:text-[65px] font-poppins gradient-btn font-semibold">
							William.
						</h1>
						{/* typing effect text  */}
						<h1 className="text-[22px] normal-case min-h-[55.3px]">
							I'm <span>{text}</span>
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
							Welcome to my portofolio. This Web Application will guide you
							through my journey as a UI/UX Designer and Mobile Developer.
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
				<div className="mt-[80px] flex flex-col gap-[20px]">
					<h1 className="font-bold text-[24px] md:self-start self-center">
						Currently Working on
					</h1>
					<img
						src={CurrentProject}
						alt=""
						className="max-w-full min-w-[250px] mx-[20px] md:mx-0 md:w-full md:min-w-[35%] h-auto rounded-md border-white border-4"
					/>
					<h1 className="text-[22px] self-center md:self-start">Rentify</h1>
					<div className="flex flex-row w-fit gap-[20px] rounded-md bg-secondary p-[10px] pr-[17px] self-center md:self-start">
						<img className="h-[50px]" src={Kotlin} alt="" />
						<img className="h-[50px]" src={Firebase} alt="" />
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
