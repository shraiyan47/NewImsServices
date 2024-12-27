import { useEffect, useRef } from "react";
import styles from "./MultipleSlide.module.css";

const partners = [
  {
    name: "Partner 1",
    image:
      "https://www.kenilworthglobalconsulting.com/wp-content/uploads/2022/05/Best-Universities-in-UK-1.jpeg",
  },
  {
    name: "Partner 2",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/19/16/graduates-inequality.jpg",
  },
  {
    name: "Partner 3",
    image: "https://ukstudycentre.co.uk/wp-content/uploads/2018/09/c1.jpg",
  },
  {
    name: "Partner 4",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/19/16/graduates-inequality.jpg",
  },
  {
    name: "Partner 5",
    image: "https://ukstudycentre.co.uk/wp-content/uploads/2018/09/c1.jpg",
  },
  {
    name: "Partner 6",
    image:
      "https://www.kenilworthglobalconsulting.com/wp-content/uploads/2022/05/Best-Universities-in-UK-1.jpeg",
  },
  {
    name: "Partner 1",
    image:
      "https://www.kenilworthglobalconsulting.com/wp-content/uploads/2022/05/Best-Universities-in-UK-1.jpeg",
  },
  {
    name: "Partner 2",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/19/16/graduates-inequality.jpg",
  },
  {
    name: "Partner 3",
    image: "https://ukstudycentre.co.uk/wp-content/uploads/2018/09/c1.jpg",
  },
  {
    name: "Partner 4",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/19/16/graduates-inequality.jpg",
  },
  {
    name: "Partner 5",
    image: "https://ukstudycentre.co.uk/wp-content/uploads/2018/09/c1.jpg",
  },
  {
    name: "Partner 6",
    image:
      "https://www.kenilworthglobalconsulting.com/wp-content/uploads/2022/05/Best-Universities-in-UK-1.jpeg",
  },
  {
    name: "Partner 1",
    image:
      "https://www.kenilworthglobalconsulting.com/wp-content/uploads/2022/05/Best-Universities-in-UK-1.jpeg",
  },
  {
    name: "Partner 2",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/19/16/graduates-inequality.jpg",
  },
  {
    name: "Partner 3",
    image: "https://ukstudycentre.co.uk/wp-content/uploads/2018/09/c1.jpg",
  },
  {
    name: "Partner 4",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/19/16/graduates-inequality.jpg",
  },
  {
    name: "Partner 5",
    image: "https://ukstudycentre.co.uk/wp-content/uploads/2018/09/c1.jpg",
  },
  {
    name: "Partner 6",
    image:
      "https://www.kenilworthglobalconsulting.com/wp-content/uploads/2022/05/Best-Universities-in-UK-1.jpeg",
  },
];

const PartnerSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 2500); // Automatically change slide every 5 seconds
    return () => clearInterval(interval);
  });

  const slideNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth / 4, // Slide by one partner width
        behavior: "smooth",
      });
    }
  };

  const slidePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -(sliderRef.current.offsetWidth / 4), // Slide back by one partner width
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.sliderContainer}>
      
      <button className={styles.navButton} onClick={slidePrev}>
        &#8249;
      </button>


      <div className={styles.slider} ref={sliderRef}>
        {partners.map((partner, index) => (
          <div className={styles.partnerCard} key={index}>
            <img
              src={partner.image}
              alt={partner.name}
              style={{ width: "10rem", height: "7rem" }}
            />
          </div>
        ))}
      </div> 

     

      <button className={styles.navButton} onClick={slideNext}>
        &#8250;
      </button>
    </div>
  );
};

export default PartnerSlider;
