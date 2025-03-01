import React, { useEffect } from "react";
import Link from "next/link";
// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";
import Image from "next/image";
import { useRouter } from "next/router";

export default function OfferNav(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [url, setUrl] = React.useState(null);

  const router = useRouter();
  // eslint-disable-next-line no-restricted-globals
  useEffect(() => {    
    setUrl(window.location.hostname)
  }, [router])
 

  // console.log(router, url);
  return (
    <>
      <div
        className="fixed w-full flex flex-wrap items-center justify-between px-2 py-6 divbar-expand-lg"
        style={{
          backdropFilter: "blur(15px)",
          background: "rgb(51, 55, 100) !important",
          top: "0", 
        }}
      >
    
        <h1 className="hidden">IMS Services || Best Student Consultancy Service in Bangladesh || Studnet Visa, Best University serarching, Scholarship</h1>
      </div>
    </>
  );
}
