import React, { useEffect } from "react";
import Link from "next/link";
// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [url, setUrl] = React.useState(null);

  const router = useRouter();
  // eslint-disable-next-line no-restricted-globals
  useEffect(() => {    
    setUrl(window.location.hostname)
  }, [router])
  
  // Add scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNavbarOpen(false);
    }
  };

  // console.log(router, url);
  return (
    <>
      <nav
        className="top-[40px] fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        style={{
          backdropFilter: "blur(15px)",
          background: "rgb(176, 140, 207)",
        }}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link legacyBehavior href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                {/* IMS Services */}
                <Image
                  src={"/img/logo.svg"}
                  alt="IMS SERVICES"
                  height={100}
                  width={100}
                  style={{filter: "drop-shadow(2px 2px 4px rgb(51, 55, 100))"}}
                />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-gray-800 fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>
              </li>
            </ul> */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <button
                  onClick={() => scrollToSection("services")}
                  className="lg:text-gray-800 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-gray-600"
                >
                  Services
                </button>
              </li>
              <li className="flex items-center">
                <button
                  onClick={() => scrollToSection("destinations")}
                  className="lg:text-gray-800 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-gray-600"
                >
                  Destinations
                </button>
              </li>
              <li className="flex items-center">
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="lg:text-gray-800 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-gray-600"
                >
                  Testimonials
                </button>
              </li>
              <li className="flex items-center">
                <button
                  onClick={() => scrollToSection("partners")}
                  className="lg:text-gray-800 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-gray-600"
                >
                  Partners
                </button>
              </li>
              <li className="flex items-center">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="lg:text-gray-800 text-gray-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold hover:text-gray-600"
                >
                  Contact
                </button>
              </li>
              {url === "localhost" && (
                <li className="flex items-center">
                  <PagesDropdown />
                </li>
              )}
              <li className="flex items-center">
                <Link
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/IMSServicesBd/"
                  target="_blank"
                >
                  <i className=" fab fa-facebook text-lg leading-lg " style={{color:'blue'}} />
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://api.whatsapp.com/send?phone=%2B8801781913380&context=ARDOLsx_QJgX7Te26og4N-iTKssMNYKSfkkp1LbyzuJANw3KL7eZuF028WEeQEyYiSqrPJ6SUaA3TtPeuEWrUqfB1GkDi-XD7lXc_JuY0XVumBuhJQ51hLeib04yUjG6TfsxRsnf8FZbNoDySdqfG_pisA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR303CSeUmTHjUHDU3UL8bJc-zZUpLeaKXJdWPqG5Y2c3CCYYrS30HXbBKo_aem_9zt_wIdViXPoyUADGKmmdQ"
                  target="_blank"
                >
                  <i className="fab fa-whatsapp text-lg leading-lg "  style={{color:'green'}}  />
                  <span className="lg:hidden inline-block ml-2">WhatsApp</span>
                </Link>
              </li>

               

               
            </ul>
          </div>
        </div>
        <h1 className="hidden">IMS Services || Best Student Consultancy Service in Bangladesh || Studnet Visa, Best University serarching, Scholarship</h1>
      </nav>
    </>
  );
}
