import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import styles from '../../styles/destination.module.css';

export default function DestinationDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultDestinations = [
    {
      _id: "StudyintheUK",
      title: "Study in the UK – World-Class Education & Global Recognition",
      countryName: "United Kingdom",
      destination:
        "<p>The <strong>United Kingdom</strong> is home to some of the world's top universities, including <span style='color:#0073e6; font-weight:bold;'>Oxford</span>, <span style='color:#0073e6; font-weight:bold;'>Cambridge</span>, and <span style='color:#0073e6; font-weight:bold;'>Imperial College London</span>. With high academic standards, diverse programs, and post-study work opportunities, the UK is a top choice for Bangladeshi students.</p> <h3 style='color:#ff6600; border-bottom:2px solid #ff6600; padding-bottom:5px;'>Key Benefits:</h3> <ul style='padding-left:20px;'> <li>🎓 <strong>Globally recognized degrees</strong></li> <li>💼 <strong>2-year post-study work visa</strong></li> <li>💰 <strong>Scholarships for international students</strong></li> <li>🏛️ <strong>Affordable tuition fees compared to the USA</strong></li> <li>📚 <strong>Wide range of programs and institutions</strong></li> </ul> <p style='font-size:16px; color:#333;'>Study in the UK and gain a competitive edge in your career. <strong style='color:#ff6600;'>Contact us</strong> for expert guidance and support throughout the application process.</p>",
      thumbnail: "/img/destination/UK@3x.png",
    },
    {
      _id: "StudyintheUSA",
      title: "Study in the USA – Land of Opportunities & Innovation",
      countryName: "United States",
      destination:
        "<p>The <strong>United States</strong> offers cutting-edge education, world-renowned institutions like <span style='color:#0073e6; font-weight:bold;'>Harvard</span> and <span style='color:#0073e6; font-weight:bold;'>MIT</span>, and immense career opportunities.</p> <h3 style='color:#ff6600; border-bottom:2px solid #ff6600; padding-bottom:5px;'>Key Benefits:</h3> <ul style='padding-left:20px;'> <li>📖 <strong>Wide range of courses and research opportunities</strong></li> <li>👨‍💻 <strong>OPT (Optional Practical Training) for work experience</strong></li> <li>🎓 <strong>Scholarships and financial aid</strong></li> <li>🧑‍🔬 <strong>Advanced research and technology facilities</strong></li> </ul> <p style='font-size:16px; color:#333;'>Take your career to the next level by studying in the USA. <strong style='color:#ff6600;'>Reach out to us</strong> for expert guidance on university selection and visa processing.</p>",
      thumbnail: "/img/destination/USA@3x.png",
    },
    {
      _id: "StudyinCanada",
      title: "Study in Canada – Affordable Education & High Quality of Life",
      countryName: "Canada",
      destination:
        "<p><strong>Canada</strong> is famous for its quality education, safety, and welcoming atmosphere. With universities like <span style='color:#0073e6; font-weight:bold;'>University of Toronto</span> and <span style='color:#0073e6; font-weight:bold;'>McGill</span>, students get top-notch education and work opportunities.</p> <h3 style='color:#ff6600; border-bottom:2px solid #ff6600; padding-bottom:5px;'>Key Benefits:</h3> <ul style='padding-left:20px;'> <li>💰 <strong>Affordable tuition fees and living costs</strong></li> <li>🛂 <strong>Post-graduation work permit (up to 3 years)</strong></li> <li>🌎 <strong>Immigration-friendly policies and PR opportunities</strong></li> <li>💼 <strong>High employability after graduation</strong></li> </ul> <p style='font-size:16px; color:#333;'>Start your journey towards a bright future in Canada. <strong style='color:#ff6600;'>Contact us</strong> for step-by-step support.</p>",
      thumbnail: "/img/destination/Canada@3x.png",
    },
    {
      _id: "StudyinAustralia",
      title: "Study in Australia – High-Quality Education & PR Prospects",
      countryName: "Australia",
      thumbnail: "/img/destination/Australia@3x.png",

      destination:
        "<p><strong>Australia</strong> offers world-class universities like <span style='color:#0073e6; font-weight:bold;'>University of Melbourne</span> and <span style='color:#0073e6; font-weight:bold;'>Australian National University</span>.</p> <h3 style='color:#ff6600; border-bottom:2px solid #ff6600; padding-bottom:5px;'>Key Benefits:</h3> <ul style='padding-left:20px;'> <li>🎓 <strong>2-4 years post-study work visa</strong></li> <li>🏛️ <strong>High-ranking universities and research facilities</strong></li> <li>🛂 <strong>Opportunities for permanent residency</strong></li> <li>💰 <strong>Scholarships and part-time work options</strong></li> </ul> <p style='font-size:16px; color:#333;'>Secure your future with an Australian degree. <strong style='color:#ff6600;'>Contact us</strong> for professional study abroad assistance.</p>",
    },
    {
      _id: "StudyinCyprus",
      title: "Study in Cyprus – Affordable & Quality European Education",
      countryName: "Cyprus",
      destination:
        "<p><strong>Cyprus</strong> is an emerging study destination, offering affordable tuition, quality European education, and a multicultural environment.</p> <h3 style='color:#ff6600; border-bottom:2px solid #ff6600; padding-bottom:5px;'>Key Benefits:</h3> <ul style='padding-left:20px;'> <li>💰 <strong>Low tuition fees and living costs</strong></li> <li>🏛️ <strong>English-taught programs</strong></li> <li>🌎 <strong>Pathway to Europe and Schengen access</strong></li> <li>💼 <strong>Opportunities for part-time work</strong></li> </ul> <p style='font-size:16px; color:#333;'>Discover the benefits of studying in Cyprus. <strong style='color:#ff6600;'>Contact us</strong> for application guidance.</p>",
      thumbnail: "/img/destination/Cyprus@3x.png",
    },
    {
      _id: "StudyinMalaysia",
      title: "Study in Malaysia – Affordable & Globally Recognized Education",
      countryName: "Malaysia",
      destination:
        "Malaysia is an emerging hub for international students, offering high-quality education at an affordable cost. With institutions like University of Malaya and Taylor’s University, students receive world-class education with a lower cost of living. Key Benefits:  💰 Affordable tuition fees and living costs 🏛️ Globally recognized universities and programs 🌎 Multicultural environment with diverse experiences 💼 Opportunities for part-time work and internships  Explore Malaysia as your study destination and enjoy a cost-effective yet high-quality education. Contact us for expert assistance in the admission and visa process.",
      thumbnail: "/img/destination/Malaysia@3x.png",

    },
  ];

  useEffect(() => {
    if (id) {
      fetchDestination();
    }
  }, [id]);

  const fetchDestination = async () => {
    try {
      // First check if this is one of our default destinations
      const defaultDest = defaultDestinations.find(d => d._id === id);
      if (defaultDest) {
        setDestination(defaultDest);
        setLoading(false);
        return;
      }

      // If not a default destination, try the API
      const response = await fetch(`/api/admin/destination?id=${id}`);
      const data = await response.json();
      
      if (response.ok && data) {
        setDestination(data);
      } else {
        // If API fails, check default destinations again as fallback
        const fallbackDest = defaultDestinations.find(d => d._id === id);
        if (fallbackDest) {
          setDestination(fallbackDest);
        } else {
          setDestination(null); // No destination found
        }
      }
    } catch (error) {
      console.error("Error fetching destination:", error);
      // Try default destinations as fallback
      const fallbackDest = defaultDestinations.find(d => d._id === id);
      if (fallbackDest) {
        setDestination(fallbackDest);
      } else {
        setDestination(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const bufferToBase64 = (bufferData, contentType) => {
    if (!bufferData || !contentType) return null;
    try {
      return `data:${contentType};base64,${Buffer.from(bufferData).toString(
        "base64"
      )}`;
    } catch (error) {
      console.error("Error converting buffer to base64:", error);
      return null;
    }
  };

  const getDestinationContent = () => {
    // If we have API data with content, use that
    if (destination?.destination) {
      return destination.destination;
    }
    // Otherwise, find and use default content
    const defaultDest = defaultDestinations.find((d) => d._id === id);
    return (
      defaultDest?.destination ||
      "<p>No information available for this destination.</p>"
    );
  };

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <div className="text-2xl">Loading...</div>
          </div>
        ) : destination ? (
          <>
            <div className={styles.coverSection}>
              <div className={styles.coverImage}>
                <Image
                  src={
                    destination?.coverPhoto?.data
                      ? bufferToBase64(
                          destination.coverPhoto.data,
                          destination.coverPhoto.contentType
                        )
                      : destination.thumbnail
                  }
                  alt={destination.title || "Destination cover"}
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="transition-opacity duration-500 opacity-0"
                  onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                />
              </div>
              <div className={styles.contentOverlay}>
                <div>
                  <h1 className={styles.title}>{destination?.title}</h1>
                  <p className={styles.countryName}>{destination?.countryName}</p>
                </div>
              </div>
            </div>

            <div className={styles.content}>
              <Image
                src={
                  destination?.thumbnail?.data
                    ? bufferToBase64(
                        destination.thumbnail.data,
                        destination.thumbnail.contentType
                      )
                    : destination.thumbnail || "/img/default-thumbnail.jpg"
                }
                alt={`${destination?.title || "Destination"} thumbnail`}
                width={300}
                height={200}
                className={styles.thumbnail}
              />

              <div
                className={styles.destinationContent}
                dangerouslySetInnerHTML={{
                  __html: getDestinationContent(),
                }}
              />

              <div className="text-center">
                <button
                  onClick={() => router.back()}
                  className={styles.backButton}
                >
                  Back to Destinations
                </button>
              </div>
            </div>
          </>
        ) : (
          // Error State
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="text-2xl font-bold text-gray-800 mb-4">
              Destination not found
            </div>
            <button
              onClick={() => router.back()}
              className="bg-royal-purple-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Go Back
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
