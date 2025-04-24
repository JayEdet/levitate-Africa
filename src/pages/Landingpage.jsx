/* state */
import { useEffect, useState } from "react";

/* icons */
import { HiChevronRight } from "react-icons/hi";
import { GiPlantWatering } from "react-icons/gi";
import { GiRhinocerosHorn } from "react-icons/gi";
import { FaPeoplePulling } from "react-icons/fa6";
import { HiMinus } from "react-icons/hi";

/* images */
import heroImage from "/buffalo.jpg";
import elephantsInStream from "/elephants in stream.jpg";
import groupRhino from "/group-rhinos.jpeg";
import babyCheetah from "/baby cheetah.png";
import ivory from "/ivory.jpg";
import planting from "/planting trees.png";
import heroSvg from "/hero pattern.png";
import biodiversity from "/biodiversity.jpg";
import grivetMonkey from "/grivet monkey.jpg";
import deadElephant from "/dead-elephant.jpeg";

/* videos */
import heroVideo from "/hero video.mp4";

/* swiper images */
import lonelyElephant from "/lonely elephant.jpg";
import lonelyRhino from "/lonely rhino.jpg";
import tiger from "/tiger.jpg";
import gorilla from "/gorilla.jpg";
import pangolin from "/pangolin.png";
import panda from "/panda.jpg";
import lion from "/lioness.jpg";

/* project images */
import outreach from "/school outreach.jpg";
import childPlanting from "/child planting.png";
import techNovation from "/tech training.png";
import solarProject from "/solar project.png";
/* swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

export default function Landingpage() {
  /* state for HERO SECTION transition */
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 5000);
    return () => clearTimeout(timer); // cleanup
  }, []);
  /* array for WHAT WE DO cards */
  const cards = [
    {
      image: groupRhino,
      description: "Saving species through food",
      writeup: "The nutritional challenges of feeding endangered species",
      link: "https://www.worldwildlife.org/blogs/sustainability-works/posts/saving-species-through-food-lessons-from-naturnutre-s-ition",
    },
    {
      image: babyCheetah,
      description: "Treating sick animals",
      writeup:
        "The benefits of treating animals to prevent the spread of diseases in the wild",
      link: "https://cheetah.org/ccf-blog/research/gi-problems-in-cheetahs-take-a-punch-from-probiotics/",
    },
    {
      image: ivory,
      description: "Lampooning poaching activities",
      writeup:
        "Wildlife are trafficked much like illegal drugs and firearms across continents",
      link: "https://medium.com/@Johnsonedet/animals-are-dying-in-their-numbers-145ea5d34b40",
    },
  ];
  /* swiper images */
  const swiperImages = [
    lonelyRhino,
    lonelyElephant,
    tiger,
    gorilla,
    pangolin,
    panda,
    lion,
  ];
  /* project images */
  const projects = [
    {
      image: childPlanting,
      heading: "Afforestation",
      writeup:
        "teaching and practicing afforestation is at the core of what we do",
    },
    {
      image: techNovation,
      heading: "Tech trainings",
      writeup: "we conduct trainings for Tech enthusiasts",
    },
    {
      image: outreach,
      heading: "Say no to drugs",
      writeup:
        "We carry out regular outreach programs to sensitize young people about the dangers of drug abuse",
    },
  ];

  /* goals svg and text */
  const goals = [
    {
      svgIcon: <GiPlantWatering />,
      text: "Rebuild food systems to nourish people and nature",
      bg: "bg-[rgba(43,127,78,0.8)]",
      rotate: "rotate-[2deg]",
    },
    {
      svgIcon: <GiRhinocerosHorn />,
      text: "Conserve wildlife and wild places",
      bg: "bg-[rgba(71,45,36,0.4)]", // soildeep-950
      rotate: "rotate-[-10deg]",
    },
    {
      svgIcon: <FaPeoplePulling />,
      text: "Empower young people",
      bg: "bg-[rgba(11,59,46,0.5)]",
      rotate: "rotate-[-20deg]",
    },
  ];
  return (
    <div className="w-full overflow-hidden">
      <div className="h-screen hero relative w-full md:h-94">
        {/* Image */}
        <img
          src={heroImage}
          alt="buffalo"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />

        {/* Video */}
        <video
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
            showVideo ? "opacity-100 z-0" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="overlay absolute inset-0 w-full left-0 h-full p-4 flex flex-col justify-center lg:px-16 ">
        <h1 className="hero relative font-headline sm:z-20 font-bold  text-offwhite-50 text-[32px] lg:text-[48px] lg:w-6/12">
          Africa's voice for wildlife
        </h1>
      </div>
      {/* about us */}
      <div className="about flex justify-center  items-center px-4 py-16 md:px-8 lg:px-16 lg:py-8 bg-offwhite-50">
        <div className="writeup flex flex-col items-center space-y-2 lg:w-10/12">
          <p className="text-center">
            <span className="font-bold italic text-forestdeep-950">
              Levitate Africa Foundation
            </span>{" "}
            is an African-based conservation organization that protect wildlife
            and their habitat. We sensitize people about how harmful and
            destructive poaching wildlife and deforestation is to Ecosystem and
            our planet. We also conduct and sponsor sub-initiative programs
            aimed at empowering youths in Africa.
          </p>

          <Link
            to="/Vision"
            className="rounded-md bg-forestlight-900 text-soillight-200 hover:bg-forestdeep-950 transition duration-300 hover:scale-100 backdrop-blur-sm"
          >
            <button className="">See our vision</button>
          </Link>
        </div>
      </div>
      {/* approach */}
      <div className="approach flex flex-col space-x-4 p-4 md:p-8 lg:p-16 lg:flex-row ">
        <div className="writeup">
          <h3 className="text-soildeep-950 header_text">Our approach</h3>
          <p>
            We help people living in rural communities to safely coexist with
            wildlife and prosper from conservation, instead of killing them for
            food or to make merchandise of their body parts. <br /> In alliance
            with other wildlife organizations, Levitate Africa strives to
            protect wildlife by promoting conservation in rural areas.
          </p>
        </div>
        <div className="image shadow-md overflow-hidden">
          <img
            src={elephantsInStream}
            alt="elephants in stream"
            className="hover:scale-110 transition duration-300"
          />
        </div>
      </div>
      {/*LAF IN ACTION */}
      <div className="px-4 md:p-8 lg:p-16 bg-gray-100">
        <h3 className="header_text text-forestdeep-950">Our work in action</h3>
        {/* our work */}
        <div className="lg:flex space-x-4 ">
          {cards.map((card) => (
            <a href={card.link}>
              <div
                key={card.writeup}
                className="w-full flex flex-col space-y-1 mt-4 overflow-hidden hover:scale-105 transition duration-300"
              >
                <a href={card.link}>
                  <img
                    src={card.image}
                    alt=""
                    className="w-full h-64 object-cover"
                  />
                  <h3 className="header_text">{card.description}</h3>
                  <p>{card.writeup}</p>
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="p-4 md:p-8 lg:p-16 bg-gray-50 space-y-2">
        <h3 className=" header_text font-hero text-forestdeep-950">
          Why should you care about wildlife?
        </h3>
        <p className="mb-8 lg:textcenter">
          Every specie is an important part of the ecosystem, lose too many
          species, the whole food web starts to crumble. <br />
          <span className="font-bold">Africa</span> has lost thousands of
          beautiful species to habitat destruction, climate change, pollution
          and poaching.
        </p>
        <div className="">
          <h3 className="header_text text-soildeep-950">
            Extinction is forever. Protection is now!
          </h3>
          <p className="text-forestdeep-950">Protect endangered species</p>
          {/* animals display */}
          <div>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={8}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true} //
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper w-full h-64 overflow-hidden"
            >
              {swiperImages.map((image, index) => (
                <SwiperSlide className="flex justify-center items-center rounded-md shadow-md overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    key={index}
                    className="w-full h-full object-fit "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* Humans view */}
      <div
        className="w-full p-4 h-screen bg-fixed bg-no-repeat bg-cover object-fit bg-bottom transition duration-300 flex items-center md:p-8 lg:px-16"
        style={{ backgroundImage: `url(${deadElephant})` }}
      >
        <div className="writeup w-full md:w-6/12 ">
          <h3 className="text-soillight-200 header_text">
            Most times, humans view the world too much front an anthropocentric
            standpoint, we forget that animals feel as much pain as we do, and
            breathe the same air we breathe.
          </h3>
        </div>
      </div>
      {/* plant trees */}
      <div className="flex flex-col lg:space-x-8 lg:flex-row my-16">
        <div className="image  overflow-hidden lg:w-6/12 shadow-lg">
          <img
            src={planting}
            alt="planting"
            className="w-full h-full object-cover hover:scale-110 transition duration-300"
          />
        </div>
        <div className="relative writup rounded-tl-[50px] overflow-hidden lg:py-24 space-y-4 lg:w-6/12 z-10 ">
          <div
            className="absolute inset-0 bg-repeat opacity-5 pointer-events-none z-0"
            style={{ backgroundImage: `url(${heroSvg})` }}
          ></div>
          <div className="relative z-20 w-full h-full">
            <h3 className="header_text mt-4 p-8  sm:text-center lg:text-start">
              What have you done for nature? <br />
              join our eco-restoration movement
            </h3>
            <div className="flex justify-center lg:justify-start z-10 px-8">
              <button className="button bg-forestlight-900 text-soillight-200 hover:bg-forestdeep-950 hover:text-white transition duration-300">
                Join us
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* biodiverity */}
      <div
        className="w-full h-94 object-cover bg-top-right bg-repeat mb-16 px-4 flex items-end lg:px-16"
        style={{
          backgroundImage: `url(${biodiversity})`,
        }}
      >
        <a href="https://www.worldwildlife.org/pages/what-is-biodiversity">
          <div className="bg-gray-100 p-8 flex flex-col space-y-1 w-94">
            <span className="w-10 h-0.5 bg-forestlight-900 flex justify-start items-end "></span>
            <div className="flex items-center space-x-1">
              <h3 className="header_text ">Why biodiversity matters</h3>
              <span className="w-16 h-full flex items-end">
                <HiChevronRight className="text-2xl text-forestlight-900 mt-1" />
              </span>
            </div>
            <p>
              A world without biodiversity is a weaker, and more fragile world
            </p>
          </div>
        </a>
      </div>
      {/* support  */}
      <div className="p-0 md:flex md:px-16">
        <div className="w-full h-full overflow-hidden md:w-6/12 ">
          <img
            src={lonelyElephant}
            className="w-full h-full hover:scale-110 transition duration-300"
            alt="grivet monkey"
          />
        </div>
        <div className="p-4 md:w-6/12">
          <h3 className="mt-16">
            Help levitate Africa protect elephants and other vulnerable species
            in the world.
          </h3>
        </div>
      </div>
      {/* Goals */}
      <div className=" px-4 py-16 bg-lightgreen-50 lg:px-16 my-8">
        <h3 className="text-forestlight-900 font-bold my-8 z-20 ">Our goals</h3>
        <div className="mb-8 lg:flex space-x-8 z-20">
          {goals.map((goal) => (
            <div className="goal mb-8 lg:flex space-4" key={goal.id}>
              <div className="flex justify-center lg:justify-start">
                <div
                  className={`lg:${goal.bg} rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-4xl text-5xl z-20`}
                >
                  {goal.svgIcon}
                </div>
              </div>
              <div className="writeup text-forestdeep-950">{goal.text}</div>
            </div>
          ))}
        </div>
      </div>
      {/* sub initiative programs */}
      <div className="my-8 px-4 space-x-2 lg:flex lg:px-16">
        {/* youths */}
        <div className="w-full lg:w-10/12 ">
          <h3 className="text font-bold text-forestlight-900 capitalize header_text">
            Green generation movement
          </h3>
          <p>
            <span className="italic font-bold">
              Levitate Africa foundation{" "}
            </span>
            partner with other organizations to empower and promote healthy
            living amongst young people.
          </p>
          {/* project */}
          <div className="lg:flex space-x-2">
            {projects.map((project, index) => (
              <div
                className=" overflow-hidden w-full h-full my-8 hover:shadow-lg transition duration-300"
                key={index.heading}
              >
                <img
                  src={project.image}
                  className="w-full h-48 object-cover block"
                  alt="say no to drugs, sensitize young ones about drugs"
                />
                <h3 className="uppercase font-bold">{project.heading}</h3>
                <p className="mb-8">{project.writeup}</p>
              </div>
            ))}
          </div>
          {/* see more */}
          <Link to="/Project">
            <button className="bg-forestlight-900 text-soillight-200 hover:bg-forestdeep-950 transition duration-300 ">
              See more projects
            </button>
          </Link>
        </div>
        {/* articles */}
        <div className="w-2/12 hidden">
          <h3 className="text-center text-soildeep-950 font-bold">Articles</h3>
        </div>
      </div>

      {/* donate */}
    </div>
  );
}
