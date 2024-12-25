import { useState, useEffect } from "react";

const CustomAutoSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/19/16/graduates-inequality.jpg",
      title: "Iqbal Kareem",
      details:
        "The IMS Service is a reliable, helpful and a really friendly consultancy firm according to me hence I believe they will produce the best service for your student application for higher study in UK because I have experienced there service which is in one word marvellous. And, Yeah you can trust them too I promise you won’t regret. Thanks to IMS Service Sylhet team.",
      bg: "#ffcccb",
    },
    {
      id: 2,
      image: "https://ukstudycentre.co.uk/wp-content/uploads/2018/09/c1.jpg",
      title: "Ripon Hawladar",
      details:
        "The IMS Service is a reliable, helpful and a really friendly consultancy firm according to me hence I believe they will produce the best service for your student application for higher study in UK because I have experienced there service which is in one word marvellous. And, Yeah you can trust them too I promise you won’t regret. Thanks to IMS Service Sylhet team.",

      bg: "#add8e6",
    },
    {
      id: 3,
      image:
        "https://www.kenilworthglobalconsulting.com/wp-content/uploads/2022/05/Best-Universities-in-UK-1.jpeg",
      title: "Synthia Iqbal",
      details:
        "The IMS Service is a reliable, helpful and a really friendly consultancy firm according to me hence I believe they will produce the best service for your student application for higher study in UK because I have experienced there service which is in one word marvellous. And, Yeah you can trust them too I promise you won’t regret. Thanks to IMS Service Sylhet team.",

      bg: "#90ee90",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Automatically change slide every 5 seconds
    return () => clearInterval(interval);
  });

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ position: "relative", width: "600px", margin: "auto" }}>
      {/* Slides */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              display: index === currentSlide ? "block" : "none",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "3px",
                left: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                textAlign: "center",
              }}
            >
              <h3 style={{
                fontWeight:700,
                fontSize:22,
              }}>{slide.title}</h3>
              <p>{slide.details}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPreviousSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      >
        ‹
      </button>
      <button
        onClick={goToNextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
};

export default CustomAutoSlider;
