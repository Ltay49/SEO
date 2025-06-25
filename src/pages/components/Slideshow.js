import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Slideshow.module.css";

const images = [
  { src: "/images/nails.png", alt: "Nail design" },
  { src: "/images/nailsBanner.png", alt: "Hair dye style" },
  { src: "/images/nailsBanner1.png", alt: "Hair dye style" },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === index ? styles.active : ""}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            priority={i === 0}
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
