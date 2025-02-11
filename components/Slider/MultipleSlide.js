import { useEffect, useRef } from "react";
import styles from "./MultipleSlide.module.css";

const partners = [
  {
    name: "Partner 1",
    image:
      "/img/partners/Birmingham City@3x.png",
  },
  {
    name: "Partner 2",
    image:      "/img/partners/BPP@3x.png",

  },
  {
    name: "Partner 3",
    image:       "/img/partners/Chester@3x.png",

  },
  {
    name: "Partner 4",
    image:
            "/img/partners/CSUN@3x.png",

  },
  {
    name: "Partner 5",
    image:      "/img/partners/Gannon@3x.png",

  },
  {
    name: "Partner 6",
    image:
           "/img/partners/Greenwich@3x.png",

  },
  {
    name: "Partner 7",
    image:
           "/img/partners/Hertfordshire@3x.png",

  },
  {
    name: "Partner 8",
    image:
            "/img/partners/Hull@3x.png",

  },
  {
    name: "Partner 9",
    image:      "/img/partners/London Metropolitan@3x.png",

  },
  {
    name: "Partner 10",
    image:
            "/img/partners/Portsmouth@3x.png",

  },
  {
    name: "Partner 11",
    image:      "/img/partners/Prifysgol Cymru@3x.png", //public\img\partners\Prifysgol Wrecsam@3x.png

  },
  {
    name: "Partner 12",
    image:
           "/img/partners/Prifysgol Wrecsam@3x.png",

  },
  {
    name: "Partner 13",
    image:
           "/img/partners/South Wales@3x.png",

  },
  {
    name: "Partner 14",
    image:
            "/img/partners/Uni of Law@3x.png",

  },
  {
    name: "Partner 15",
    image:      "/img/partners/UWS London@3x.png",

  },
  {
    name: "Partner 16",
    image:
            "/img/partners/Wolverhampton@3x.png", //public\img\partners\Wolverhampton@3x.png

  },
];

const PartnerSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    console.log(partners.length)
    const slideTotal = partners.length
    let x = 1;
    const interval = setInterval(() => {
      x = x + 1;
      console.log(x, slideTotal)

      if (x === slideTotal-1) {
       console.log(x)
       slidePrev(x);
       x = 1;
      }
      else{
        slideNext();
      }
    }, 2500); // Automatically change slide every 5 seconds
    return () => clearInterval(interval);
  });

  const slideNext = () => {
    if (sliderRef.current) {
      console.log(sliderRef.current.offsetWidth / 4)
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth / 4, // Slide by one partner width
        behavior: "smooth",
      });
    }
  };

  const slidePrev = (x) => {
    if (sliderRef.current) {
      if(x >= 15){
        sliderRef.current.scrollBy({
          left: -(218*16), // Slide back by one partner width
          behavior: "smooth",
        });
      }else{
        sliderRef.current.scrollBy({
          left: -(sliderRef.current.offsetWidth / 4), // Slide back by one partner width
          behavior: "smooth",
        });
      }
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
