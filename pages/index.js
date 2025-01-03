import React, { useEffect, useState } from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Image from "next/image";
import CustomAutoSlider from "components/Slider/Slider";

import x from "./landing.module.css";
import PartnerSlider from "components/Slider/MultipleSlide";

export default function Landing() {
  const cards = [
    {
      img: "/img/angular.jpg",
      title: "Top Notch Services",
      description:
        "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.",
    },
    {
      img: "/img/bootstrap.jpg",
      title: "Outstanding Support",
      description:
        "Experience unparalleled support for your business needs. Our team is dedicated to providing top-notch service tailored to your goals.",
    },
    {
      img: "/img/login.jpg",
      title: "Innovative Solutions",
      description:
        "We deliver innovative solutions to complex challenges, ensuring your business remains ahead of the curve in a competitive landscape.",
    },
  ];

  const sampleImage = [
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/19/16/graduates-inequality.jpg",
    "https://ukstudycentre.co.uk/wp-content/uploads/2018/09/c1.jpg",
    "https://www.kenilworthglobalconsulting.com/wp-content/uploads/2022/05/Best-Universities-in-UK-1.jpeg",
  ];

  const destination = {};

  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/img/ims service cover photo.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto mt-12">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Welcome to IMS Services
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    IMS Services is a leading international student recruitment
                    agency with headquarters in Dhaka and global offices across
                    United Kingdom (London), United States (New York), and
                    Australia (Melbourne). Our main focus is on the
                    international student market, aiming to create exceptional
                    opportunities for our students. We have successfully placed
                    candidates in top universities across various sectors, such
                    as law, economics, medicine, engineering, and business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        {/* Services */}
        <section className="pb-30 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      {/* <i className="fas fa-award"></i> */}
                      <img
                        src={"/icon/school.png"}
                        alt="college"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      College & University Admission
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      {/* <i className="fas fa-retweet"></i> */}
                      <Image
                        src={"/icon/study.png"}
                        alt="college"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Scholarship Assistance
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-teal-200">
                      {/* <i className="fas fa-fingerprint"></i> */}
                      <Image
                        src={"/icon/graph.png"}
                        alt="college"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Financial Documentation Guidance
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-yellow-500">
                      {/* <i className="fas fa-fingerprint"></i> */}
                      <Image
                        src={"/icon/study.png"}
                        alt="college"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Career Counselling
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-200">
                      {/* <i className="fas fa-fingerprint"></i> */}
                      <Image
                        src={"/icon/docs.png"}
                        alt="college"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">Visa Services</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      {/* <i className="fas fa-fingerprint"></i> */}
                      <Image
                        src={"/icon/report.png"}
                        alt="college"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Test Preparation Classes
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Find You Destination */}
        <section className="pt-15 pb-20 mt-10">
          <div className={x.sectionFindDestination}>
            <div className={x.findDestinationBoxPosition}>
              <div className={x.findDestinationBox}>
                <a href='https://api.whatsapp.com/send?phone=%2B8801781913380&context=ARDOLsx_QJgX7Te26og4N-iTKssMNYKSfkkp1LbyzuJANw3KL7eZuF028WEeQEyYiSqrPJ6SUaA3TtPeuEWrUqfB1GkDi-XD7lXc_JuY0XVumBuhJQ51hLeib04yUjG6TfsxRsnf8FZbNoDySdqfG_pisA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR303CSeUmTHjUHDU3UL8bJc-zZUpLeaKXJdWPqG5Y2c3CCYYrS30HXbBKo_aem_9zt_wIdViXPoyUADGKmmdQ' target="_blank">

                <div className={x.textContainer}>
                  <small style={{marginTop:'2rem'}} >[UNDER DEVELOPMENT, PLEASE CONTACT IN WHATSAPP]</small>
                  <p className={x.textStatics}>
                    Browse top destinations from over 120 universities worldwide 
                  </p>


                  <p className={x.findDestinationText}>Choose you Degree</p>
                </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations  */}
        <section className="pt-5 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-12">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Our Top Destinations</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Explore Top Study Destinations
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-2/12 md:w-3/12 lg:w-3/12 xl:w-3/12 lg:mb-1 mb-12 px-4  ">
                <div className="px-6 py-6 border-2">
                  <Image
                    alt="..."
                    src="/img/UK.jpeg"
                    className="shadow-lg   mx-auto max-w-120-px"
                    width={100}
                    height={100}
                    style={{ width: "8rem", height: "8rem" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Study in UK</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      United Kingdom
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-royal-purple-500 text-white font-semibold w-[4rem] h-8  outline-none focus:outline-none mr-1 mb-1 px-2 hover:bg-gray-800 hover:font-bold rounded-lg"
                        type="button"
                      >
                        {/* <i className="fab fa-twitter"></i> */}
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-2/12 md:w-3/12 lg:w-3/12 xl:w-3/12 lg:mb-1 mb-12 px-4  ">
                <div className="px-6 py-6 border-2">
                  <Image
                    alt="..."
                    src="/img/USA.jpeg"
                    className="shadow-lg   mx-auto max-w-120-px"
                    width={100}
                    height={100}
                    style={{ width: "8rem", height: "8rem" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Study in USA</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      United Kingdom
                    </p>
                    <div className="mt-6">
                      <button
                        className=" bg-royal-purple-500 text-white font-semibold w-[4rem] h-8  outline-none focus:outline-none mr-1 mb-1 px-2 hover:bg-gray-800 hover:font-bold  rounded-lg"
                        type="button"
                      >
                        {/* <i className="fab fa-twitter"></i> */}
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-2/12 md:w-3/12 lg:w-3/12 xl:w-3/12 lg:mb-1 mb-12 px-4  ">
                <div className="px-6 py-6 border-2">
                  <img
                    alt="..."
                    src="/img/team-1-800x800.jpg"
                    className="shadow-lg   mx-auto max-w-120-px"
                    style={{ width: "8rem", height: "8rem" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Study in Australia</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      United Kingdom
                    </p>
                    <div className="mt-6">
                      <button
                        className=" bg-royal-purple-500 text-white font-semibold w-[4rem] h-8  outline-none focus:outline-none mr-1 mb-1 px-2 hover:bg-gray-800 hover:font-bold  rounded-lg"
                        type="button"
                      >
                        {/* <i className="fab fa-twitter"></i> */}
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-2/12 md:w-3/12 lg:w-3/12 xl:w-3/12 lg:mb-1 mb-12 px-4  ">
                <div className="px-6 py-6 border-2">
                  <img
                    alt="..."
                    src="/img/team-1-800x800.jpg"
                    className="shadow-lg   mx-auto max-w-120-px"
                    style={{ width: "8rem", height: "8rem" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Study in UK</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      United Kingdom
                    </p>
                    <div className="mt-6">
                      <button
                        className=" bg-royal-purple-500 text-white font-semibold w-[4rem] h-8  outline-none focus:outline-none mr-1 mb-1 px-2 hover:bg-gray-800 hover:font-bold  rounded-lg"
                        type="button"
                      >
                        {/* <i className="fab fa-twitter"></i> */}
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statastics  */}
        <section className="pt-10 pb-10 ">
          <div className={x.sectionStatics}>
            <div className={x.glassEffect}>
              <div className={x.circle}>
                <div className={x.textContainer}>
                  <p className={x.textStatics}>Universities</p>
                  <p className={x.textNumber}>20+</p>
                </div>
              </div>
              <div className={x.circle}>
                <div className={x.textContainer}>
                  <p className={x.textStatics}>Global Offices</p>
                  <p className={x.textNumber}>5+</p>
                </div>
              </div>
              <div className={x.circle}>
                <div className={x.textContainer}>
                  <p className={x.textStatics}>UK EDU EXPO</p>
                  <p className={x.textNumber}>120+</p>
                </div>
              </div>

              <div className={x.circle}>
                <div className={x.textContainer}>
                  <p className={x.textStatics}>Free Service</p>
                  <p className={x.textNumber}>100%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comments / Feedback  */}
        <section className="pt-10 pb-48 ">
          <div className="container mx-auto px-4">
            {/* ///////////////////// SLIDER ///////////////////////////  */}
            <div className="flex flex-wrap items-center mt-32">
              {/* Left Text */}
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  What Our Students Say?
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Our students who successfully completed their procedure and
                  went to abroad give recommandation in our social media and
                  other platform.
                </p>
                {/* <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images, and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p> */}
                {/* <Link href="/" legacyBehavior>
                  <a href="#pablo" className="font-bold text-blueGray-700 mt-8">
                    Check Notus NextJS!
                  </a>
                </Link> */}
              </div>

              {/* Right Card Slider */}
              <CustomAutoSlider />
            </div>
          </div>
        </section>

        {/* Comments / Feedback  */}
        <section className="pt-10 pb-48 ">
          <div className="container mx-auto px-4">
            {/* ///////////////////// SLIDER ///////////////////////////  */}
            <div className="flex flex-wrap justify-center text-center mb-12">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Our Partners</h2>
                
              </div>
            </div>

            {/* Right Card Slider */}

            <PartnerSlider />
          </div>
        </section>

        {/* <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Team members  */}
        {/* <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-6 border-2">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-1-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-2-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-3-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/img/team-4-470x470.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Build Something  */}
        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact form  */}

        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
