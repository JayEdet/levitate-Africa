import heroSvg from "/hero pattern.png";
import { Link } from "react-router-dom";
/* icons */
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "home", link: "/" },
    { name: "about us", link: "./pages/Aboutus" },
    { name: "project", link: "./Project" },
  ];
  return (
    <div className="relative bg-forestdeep-950 p-4 md:p-8 lg:px-16 text-[12px] text-soillight-200 md:flex justify-between">
      <div
        className="inset-0 absolute opacity-5"
        style={{ backgroundImage: `url(${heroSvg})` }}
      ></div>
      <div className="page_links w-full flex space-y-4 md:w-4/12 space-x-8">
        {links.map((link, index) => (
          <Link key={index.name} className=" uppercase " to={link.link}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="social_icons flex text-xl space-x-8">
        <FaWhatsapp />
        <FaInstagram />
        <FaFacebook />
      </div>
    </div>
  );
}
