import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  const navLinks = [
    { name: "home", path: "/" },
    { name: "about us", path: "/Aboutus" },
    { name: "project", path: "/Project" },
    /*  { name: "Contact", path: "/Contact" }, */
  ];

  return (
    <div className="w-full z-50 overflow-hidden fixed left-0 top-0 bg-forestdeep-950/80 shadow-md backdrop-blur-md text-white px-4 py-2 flex flex-wrap justify-between lg:px-16">
      <div className="logo flex items-center w-11/12 lg:w-7/12">
        <h1 className="italic header_text text-soillight-200">
          Levitate Africa
        </h1>
      </div>

      <div className="w-1/12 lg:hidden">
        <CiMenuFries className="text-2xl" onClick={() => setShow(!show)} />
      </div>

      <div
        className={`links lg:w-5/12 lg:flex lg:items-center lg:justify-between ${
          show ? "block" : "hidden"
        }`}
      >
        {navLinks.map((navLink) => (
          <ul key={navLink.name} className="my-4 lg:inline-flex">
            <li>
              <Link
                to={navLink.path}
                className="uppercase text-[12px]"
                onClick={() => setShow(false)}
              >
                {navLink.name}
              </Link>
            </li>
          </ul>
        ))}
        <button className="button bg-soillight-200 text-soildeep-950">
          <a href="https://wildimpact.earth/donate/">Donate</a>
        </button>
      </div>
    </div>
  );
}
