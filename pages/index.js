import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import Image from "next/image";
import CustomAutoSlider from "components/Slider/Slider";

import landingCSS from "./landing.module.css";
import PartnerSlider from "components/Slider/MultipleSlide";

export default function Landing() {
  const [destination, setDestination] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    setSubmitted(true);
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Feedback submitted successfully!");
        setFormData({ name: "", email: "", feedback: "" }); // Reset form
        setSubmitted(false);
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error}`);
        setSubmitted(false);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("Error submitting feedback.");
      setSubmitted(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const myHeaders = new Headers();
    // myHeaders.append(
    //   "Authorization",
    //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNzM2Nzg2ODAwLCJleHAiOjE3MzY4MTU2MDB9.MeYxJl79exOOvhakMStqRutlkqaawPm6iXgRhD-LbPk"
    // );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      fetch("/api/admin/destination", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // console.log(result)
          setDestination(result);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // fetch("/api/admin/destination", requestOptions)
  }, []);

  // Function to convert buffer data to base64
  const bufferToBase64 = (bufferData, contentType) => {
    return `data:${contentType};base64,${Buffer.from(bufferData).toString(
      "base64"
    )}`;
  };

  return (
    <>
      <Head>
        <title>
          Best Student Consultancy Service in Bangladesh | IMS Services
        </title>
        <meta
          name="description"
          content="IMS Services is the leading international student consultancy in Bangladesh with global offices in UK, USA & Australia. Expert guidance for university admissions, scholarships & visa services."
        />
        <meta
          name="keywords"
          content="student consultancy bangladesh, best education consultancy dhaka, study abroad bangladesh, university admission help, scholarship assistance bangladesh, visa services dhaka, IMS Services, overseas education consultant"
        />

        {/* Open Graph / Social Media */}
        <meta
          property="og:title"
          content="Best Student Consultancy Service in Bangladesh | IMS Services"
        />
        <meta
          property="og:description"
          content="Leading international student consultancy in Bangladesh helping students achieve their study abroad dreams. Expert guidance for university admissions, scholarships & visa services."
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:url" content="https://imsservicesbd.com" />

        {/* Additional SEO tags */}
        <link rel="canonical" href="https://imsservicesbd.com" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="BD-13" />
        <meta name="geo.placename" content="Dhaka" />
        <meta name="geo.position" content="23.7461;90.3742" />
        <meta name="ICBM" content="23.7461, 90.3742" />
      </Head>
      <Navbar />
      <main>
        {/* Update the main heading for SEO */}
        <h1 className="sr-only">
          Best Student Consultancy Service in Bangladesh - IMS Services
        </h1>

        {/* Cover section */}
        <div className="relative pt-16">
          <div className="relative pb-32 flex content-center items-center justify-center min-h-screen-75">
            {/* Cover Image on Background Start*/}
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('/img/CoverWA.png')",
              }}
            >
              {/* Cover Image on Background End */}
            </div>
          </div>
        </div>

        {/* Services */}
        <section id="services" className="pb-30 bg-blueGray-200 ">
          <br />
          <br />

          <div className="container mx-auto px-4">
            <div className="container relative mx-auto mt-12">
              <div className="items-center flex flex-wrap ">
                <div className="w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12 mt-10 mb-10">
                    <h1 className="text-gray-800 font-semibold text-5xl">
                      Your Gateway to World-Class Education
                    </h1>
                    <h2 className="text-2xl font-semibold text-gray-800 hidden">
                      IMS Services - Best Education Consultancy in Bangladesh
                    </h2>
                    <h4 className="mt-4 text-lg text-gray-800 ">
                      IMS Services is a leading international student
                      consultancy agency with headquarters in Dhaka and global
                      offices across United Kingdom (London), United States (New
                      York), and Australia (Melbourne). Our main focus is on the
                      international student market, aiming to create exceptional
                      opportunities for our students. We have successfully
                      placed candidates in top universities across various
                      sectors, such as law, economics, medicine, engineering,
                      and business.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
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

        {/* Find Your Destination */}
        <section
          id="destinations"
          className="pt-15 pb-20 mt-10 section-find-destination"
        >
          <div className="container">
            <div className="find-destination-box">
              <Link
                href="/university/universitiesPage"
                // target="_blank"
                rel="noopener noreferrer"
                className="find-destination-link"
              >
                <div className="text-container">
                  {/* <small>[UNDER DEVELOPMENT, PLEASE CONTACT IN WHATSAPP]</small> */}
                  <p className="text-statics">
                    Browse top destinations from over 50 universities worldwide
                  </p>
                  <button className="cta-button">Choose Your Degree</button>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Destinations  */}
        <section className="pt-5 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-12">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Our Top Destinations</h2>
                <h3 className="text-2xl font-semibold hidden">
                  IMS Services covers a wide range of study destinations. We
                  have successfully placed candidates in top universities across
                  various sectors, such as law, economics, medicine,
                  engineering, and business. We cover more than 50 universities
                  worldwide and have global offices in the UK, USA, Malaysia,
                  Cyprus and Australia.
                </h3>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Explore Top Study Destinations
                </p>
              </div>
            </div>
            {loading ? (
              "Loading..."
            ) : (
              <>
                <div className="flex flex-wrap">
                  {destination
                    .slice()
                    .reverse()
                    .map((dest) => (
                      <div
                        key={dest._id}
                        className="w-full sm:w-6/12 md:w-4/12 lg:w-4/12 xl:w-4/12 mb-8 px-4"
                      >
                        <div className="px-6 py-6 border-2">
                          <Image
                            alt="..."
                            src={bufferToBase64(
                              dest.thumbnail.data,
                              dest.thumbnail.contentType
                            )}
                            className="shadow-lg   mx-auto max-w-120-px"
                            width={1}
                            height={1}
                            style={{ width: "8rem", height: "8rem" }}
                          />
                          <div className="pt-6 text-center">
                            <h5 className="text-xl font-bold">{dest.title}</h5>
                            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                              {dest.countryName}
                            </p>
                            <div className="mt-6">
                              <Link
                                href={`/destination/${dest._id}`}
                                className="bg-royal-purple-500 text-white font-semibold w-[4rem] h-8  outline-none focus:outline-none mr-1 mb-1 px-2 hover:bg-gray-800 hover:font-bold rounded-lg"
                                type="button"
                              >
                                {/* <i className="fab fa-twitter"></i> */}
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Statastics  */}
        <section className="py-10 px-4">
          <div className={landingCSS.sectionStatics}>
            <div
              className={`${landingCSS.glassEffect} flex-wrap justify-center`}
            >
              <div className={landingCSS.circle}>
                <div className={landingCSS.textContainer}>
                  <p className={landingCSS.textStatics}>Universities</p>
                  <p className={landingCSS.textNumber}>20+</p>
                </div>
              </div>
              <div className={landingCSS.circle}>
                <div className={landingCSS.textContainer}>
                  <p className={landingCSS.textStatics}>Global Offices</p>
                  <p className={landingCSS.textNumber}>5+</p>
                </div>
              </div>
              <div className={landingCSS.circle}>
                <div className={landingCSS.textContainer}>
                  <p className={landingCSS.textStatics}>UK EDU EXPO</p>
                  <p className={landingCSS.textNumber}>120+</p>
                </div>
              </div>

              <div className={landingCSS.circle}>
                <div className={landingCSS.textContainer}>
                  <p className={landingCSS.textStatics}>Free Service</p>
                  <p className={landingCSS.textNumber}>100%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="pt-10 pb-48 ">
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

        {/* Partners */}
        <section id="partners" className="pt-10 pb-48 ">
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

        {/* Contact Us  */}
        <section id="contact" className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)", top: "1px" }}
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
                  Contact Us
                </h2>
                {/* <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p> */}
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-location text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Our Location
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  <Link
                    href="https://maps.app.goo.gl/92TTeVGcrkKFLBRX7"
                    target="_blank"
                  >
                    House No. 38, Road No. 2, Aram Properties, Bosila,
                    Mohammadpur 1209 Dhaka, Dhaka Division, Bangladesh
                  </Link>
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-phone text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Call Us On
                </h5>
                <a
                  className="mt-2 mb-4 text-blueGray-400"
                  href="tel:+8801781913380"
                >
                  +8801781913380
                </a>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Email Us
                </h5>
                <a
                  className="mt-2 mb-4 text-blueGray-400"
                  href="mailto:info@imsservicesbd.com"
                >
                  info@imsservicesbd.com
                </a>
                {/* <p className="mt-2 mb-4 text-blueGray-400">
                  info@imsservicesbd.com
                </p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Contact form and Map */}
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              {/* Contact Form */}
              <div className="w-full lg:w-6/12 px-4 mb-8">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <form onSubmit={handleSubmit}>
                      <h4 className="text-2xl font-semibold">
                        Leave us a message
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                        Keep in touch with us. Leave us a message. You can keep
                        your mobile number in message too.
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
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
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
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
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
                          name="feedback"
                          value={formData.feedback}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="text-center mt-6">
                        {submitted ? (
                          <button>Submitted</button>
                        ) : (
                          <button
                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                          >
                            Send Message
                          </button>
                        )}
                      </div>
                    </form>
                    <p>{status}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.6006468571452!2d90.34274814192074!3d23.753266991782382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfc1d1e33765%3A0x5c0e5a3ae41b255a!2sIMS%20Services!5e1!3m2!1sen!2sbd!4v1739188672125!5m2!1sen!2sbd"
                    className="w-full"
                    width="592"
                    height="561"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
