import styles from "./Services.module.css";
import Image from "next/image";

const services = [
  {
    icon: "💅",
    image: "/images/manicure.png",
    title: "Manicure",
    description:
      "Classic and gel manicures to keep your nails healthy and beautiful.",
  },
  {
    icon: "🛒",
    image: "/images/buy.png",
    title: "In Your Basket",
    description: "Purchase and take home your own acrylics from our selection.",
  },
  {
    icon: "🎨",
    image: "/images/design.png",
    title: "Nail Art",
    description: "Custom nail designs and art to express your unique style.",
  },
  {
    icon: "💖",
    image: "/images/manicure.png",
    title: "Nail Repairs",
    description: "Quick fixes and repairs for broken or damaged nails.",
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                width={4000}
                height={100}
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.textContent}>
              {/* <span className={styles.icon}>{service.icon}</span> */}
              <h3 className={styles.t}>{service.title}</h3>
              <p className={styles.d}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
