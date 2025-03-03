import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import PagesDropdown from "components/Dropdowns/PagesDropdown";
import TopBar from "./TopBar";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [url, setUrl] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setUrl(window.location.hostname);
  }, [router]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNavbarOpen(false);
    }
  };

  return (
    <>
      <TopBar />
      <nav 
        className="fixed z-40 w-full bg-opacity-90 backdrop-filter backdrop-blur-lg" 
        style={{ 
          backgroundColor: "rgb(176, 140, 207)",
          top: "36px" // Fixed pixel value for TopBar height
        }}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link href="/">
              <span className="text-white text-lg font-bold">
                <Image src="/img/logo.svg" alt="IMS SERVICES" height={120} width={120}  style={{filter: "drop-shadow(2px 2px 4px rgb(199, 191, 207))"}} />
              </span>
            </Link>
            <button
              className="text-white text-2xl lg:hidden"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className={`lg:flex flex-grow items-center ${navbarOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {[
                { id: "services", label: "Services" },
                { id: "destinations", label: "Destinations" },
                { id: "testimonials", label: "Testimonials" },
                { id: "partners", label: "Partners" },
                { id: "contact", label: "Contact" }
              ].map(({ id, label }) => (
                <li key={id} className="nav-item border-2 border-white rounded-md transition-all duration-300 hover:bg-violet-600">
                  <button onClick={() => scrollToSection(id)} className="nav-link block px-4 py-2 w-full">
                    {label}
                  </button>
                </li>
              ))}
              {url === "localhost" && (
                <li className="nav-item">
                  <PagesDropdown />
                </li>
              )}
              <li className="mt-2">
                <Link href="https://www.facebook.com/IMSServicesBd/" target="_blank">
                  <span className="nav-link block px-4 py-2 w-full">
                    <i className="fab fa-facebook" style={{ color: 'blue', fontSize:'1.4em' }}></i>
                    <span className="lg:hidden ml-2">Facebook</span>
                  </span>
                </Link>
              </li>
              <li className="mt-2">
                <Link href="https://api.whatsapp.com/send?phone=%2B8801781913380&context=ARDOLsx_QJgX7Te26og4N-iTKssMNYKSfkkp1LbyzuJANw3KL7eZuF028WEeQEyYiSqrPJ6SUaA3TtPeuEWrUqfB1GkDi-XD7lXc_JuY0XVumBuhJQ51hLeib04yUjG6TfsxRsnf8FZbNoDySdqfG_pisA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR303CSeUmTHjUHDU3UL8bJc-zZUpLeaKXJdWPqG5Y2c3CCYYrS30HXbBKo_aem_9zt_wIdViXPoyUADGKmmdQ" target="_blank">
                  <span className="nav-link block px-4 py-2 w-full">
                    <i className="fab fa-whatsapp" style={{ color: 'green' , fontSize:'1.4em' }}></i>
                    <span className="lg:hidden ml-2">WhatsApp</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
      </nav>
    </>
  );
}
