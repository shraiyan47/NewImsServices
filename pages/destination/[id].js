import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function DestinationDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchDestination();
    }
  }, [id]);

  const fetchDestination = async () => {
    try {
      const response = await fetch(`/api/admin/destination?id=${id}`);
      const data = await response.json();
      console.log(data);
      setDestination(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching destination:", error);
      setLoading(false);
    }
  };

  const bufferToBase64 = (bufferData, contentType) => {
    return `data:${contentType};base64,${Buffer.from(bufferData).toString("base64")}`;
  };

return (
    <>
        <Navbar />
        <main style={{ paddingTop: "14rem" }}>
            {loading ? (
                <div className="">LOADING...</div>
            ) : destination ? (
                <>
                    {/* Cover Image Section */}
                    <div className="relative w-full h-[50vh]">
                        <Image
                            src={bufferToBase64(
                                destination.coverPhoto.data,
                                destination.coverPhoto.contentType
                            )}
                            alt={destination.title}
                            layout="fill"
                            objectFit="cover"
                            priority
                            className="transition-opacity duration-500 opacity-0"
                            onLoadingComplete={(image) =>
                                image.classList.remove("opacity-0")
                            }
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                            style={{ textAlign: "center", padding: "0 1rem" }}
                        >
                            <div className="text-white" style={{ lineHeight: "1.5" }}>
                                <h1
                                    className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in"
                                    style={{
                                        textShadow: "3px 3px 6px rgba(0,0,0,0.6)",
                                        fontFamily: "Georgia, serif",
                                    }}
                                >
                                    {destination.title}
                                </h1>
                                <p
                                    className="text-xl md:text-2xl animate-fade-in-delay"
                                    style={{
                                        textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                                        fontFamily: "Arial, sans-serif",
                                    }}
                                >
                                    {destination.countryName}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="container mx-auto px-4 py-8 animate-fade-in-up">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                                {/* Thumbnail */}
                                <div className="flex justify-center mb-8">
                                    <Image
                                        src={bufferToBase64(
                                            destination.thumbnail.data,
                                            destination.thumbnail.contentType
                                        )}
                                        alt={`${destination.title} thumbnail`}
                                        width={200}
                                        height={200}
                                        className="rounded-lg"
                                    />
                                </div>

                                {/* Destination Content */}
                                <div
                                    className="prose max-w-none"
                                    dangerouslySetInnerHTML={{
                                        __html: destination.destination,
                                    }}
                                />

                                {/* Back Button */}
                                <div className="mt-8 flex justify-center">
                                    <button
                                        onClick={() => router.back()}
                                        className="bg-royal-purple-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                                    >
                                        Back to Destinations
                                    </button>
                                </div>
                            </div>
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
