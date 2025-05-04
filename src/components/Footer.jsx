import heroSvg from "/hero pattern.png";
import { Link } from "react-router-dom";
/* icons */
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  const links = [
    { name: "About us", link: "./Aboutus" },
    { name: "Our vision", link: "./Vision" },
    { name: "Project", link: "./Project" },
  ];
  return (
    <div className="relative bg-forestdeep-950 p-4 md:p-8 lg:px-16 text-[12px] text-white md:flex justify-between">
      <div className="logo mb-8">
        <h1 className="text-soillight-200 font-bold text-lg mb-2">
          Levitate Africa
        </h1>
        <p>We preserve wildlife and wild lands</p>
      </div>
      <div className="page_links hidden md:block">
        <h3 className="text-lg font-bold mb-2">Useful links</h3>
        {links.map((link, index) => (
          <Link
            key={link.name}
            className="uppercase flex flex-col mb-2 "
            to={link.link}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">connect with us</h3>
        <div className="social_icons flex text-xl space-x-8">
          <FaWhatsapp />
          <FaInstagram />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
}
