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
    <div className="fixed top-0 left-0 w-full z-50 overflow-hidden bg-forestdeep-950/50 shadow-md backdrop-blur-md text-white p-4  flex flex-wrap justify-between md:px-8 lg:px-16 lg:py-0">
      <div className="logo flex items-center w-11/12 lg:w-7/12">
        <h1 className="italic headline_text text-soillight-200">
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
          Donate
        </button>
      </div>
    </div>
  );
}
