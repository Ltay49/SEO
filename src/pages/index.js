import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import Services from "./components/Services";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "M&M Nails",
    image: "https://mmnailsalon.netlify.app/images/nail2.jpg",
    telephone: "+441612345678",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hamilton Street",
      addressLocality: "Oldham",
      addressRegion: "Greater Manchester",
      postalCode: "OL1 1AA",
      addressCountry: "UK",
    },
    url: "https://mmnailsalon.netlify.app/",
    description:
      "M&M Nails is Oldham's premium nail salon offering expert manicures, pedicures, and nail art in a hygienic and friendly environment.",
    priceRange: "££",
  };

  return (
    <>
      <Head>
        <title>
          M&amp;M Nails - Premium Nail Salon in Oldham | Manicures & Pedicures
        </title>
        <meta
          name="description"
          content="Looking for a nails salon walk in near me in Oldham? Visit M&M Nails for expert manicures, acrylic nails, pedicures, and friendly service. Walk-ins welcome!"
        />
        <meta
          name="google-site-verification"
          content="G-RBx9VaOR-ll2Y2sU37QyOvXjK-z8bDu1qZhHGJxT0"
        />{" "}
        <meta
          name="keywords"
          content="nail salon, manicure, pedicure, nail art, Oldham, beauty, nail designs, professional nails, walk in"
        />
        <meta name="author" content="M&M Nails" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://mmnailsalon.netlify.app" />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="M&M Nails - Premium Nail Salon in Oldham"
        />
        <meta
          property="og:description"
          content="Expert manicures, pedicures, and nail art services in Oldham. Beautiful nails, friendly service."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mm-nails.example.com/" />
        <meta
          property="og:image"
          content="https://mmnailsalon.netlify.app/images/nail2.jpg"
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="M&M Nails - Premium Nail Salon in Oldham"
        />
        <meta
          name="twitter:description"
          content="Expert manicures, pedicures, and nail art services in Oldham."
        />
        <meta
          name="twitter:image"
          content="https://mm-nails.example.com/images/og-image.jpg"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Slideshow />
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.leftColumn}>
            <h1 className={styles.title}>
              Welcome to <strong>M&amp;M Nails</strong>
              <br />
              Oldham&apos;s Premium Nail Salon
            </h1>

            <a
              href="tel:+441612345678"
              className={styles.callButton}
              aria-label="Call M and M Nails at 0161 234 5678"
            >
              Call Now: 0161 234 5678
            </a>

            <a
              href="mailto:info@mmnails.co.uk"
              className={styles.emailLink}
              aria-label="Email M and M Nails"
            >
              info@mmnails.co.uk
            </a>

            <a
              href="https://instagram.com/mmnails"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit M and M Nails Instagram"
              className={styles.instagramLink}
            >
              {/* Instagram SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <title>Instagram</title>
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
              </svg>
            </a>
          </div>

          <div className={styles.rightColumn}>
            <p className={styles.description}>
              Located in the heart of Oldham, M&amp;M Nails offers premium
              manicure and pedicure services tailored to your style. Whether
              you&apos;re looking for elegant nail art or a relaxing treatment,
              our Oldham nail salon provides a hygienic and friendly environment
              for all your beauty needs.
            </p>
          </div>
        </header>
        <Services />
        <section aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className={styles.galleryTitle}>
            Explore Our Nail Design Gallery
          </h2>
          <div className={styles.gallery}>
            {[
              "/images/nail4.jpeg",
              "/images/nail4.jpeg",
              "/images/nail4.jpeg",
              "/images/nail4.jpeg",
              "/images/nail4.jpeg",
              "/images/nail4.jpeg",
              "/images/nail4.jpeg",
              "/images/nail4.jpeg",
            ].map((src, i) => (
              <Image
                key={i} // ✅ Add this
                src={src} // You had hardcoded "/images/nail4.jpeg", but better to use the dynamic `src`
                alt={`Nail design ${i + 1}`}
                width={300}
                height={300}
                className={styles.galleryImage}
              />
            ))}
          </div>
        </section>
        <section className={styles.localSeo}>
          <h2>Why Choose M&amp;M Nails in Oldham?</h2>
          <p>
            Located in the heart of Oldham, <strong>M&amp;M Nails</strong> is
            your go-to destination for professional manicures, pedicures, and
            bespoke nail art. Whether you’re preparing for a special occasion or
            simply want healthy, beautiful nails, our experienced nail
            technicians deliver high-quality service in a clean and friendly
            environment. Visit us today and discover why so many locals in
            Oldham trust us for their nail care.
          </p>

          <h3>Frequently Asked Questions</h3>
          <div className={styles.faqAccordion}>
            <details>
              <summary>Where is M&amp;M Nails located?</summary>
              <p>
                We're based in central Oldham, near <em>[insert landmark]</em>.
              </p>
            </details>

            <details>
              <summary>Do I need to book an appointment?</summary>
              <p>
                Walk-ins are welcome, but we recommend calling ahead to check
                availability.
              </p>
            </details>

            <details>
              <summary>Can I walk in without an appointment?</summary>
              <p>
                Yes! <strong>M&amp;M Nails</strong> is one of the top-rated{" "}
                <strong>nail salons for walk-ins in Oldham</strong>. We welcome
                clients without appointments for manicures, acrylic nails, and
                pedicures.
              </p>
            </details>

            <details>
              <summary>What services do you offer?</summary>
              <p>
                We provide manicures, pedicures, acrylics, gel nails, and custom
                nail art tailored to your preferences.
              </p>
            </details>
          </div>
        </section>
      </main>
      <footer
        className={styles.footer}
        role="contentinfo"
        itemScope
        itemType="https://schema.org/BeautySalon"
      >
        <address
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <p>
            <strong itemProp="name">M&amp;M Nails</strong>
            <br />
            <span itemProp="streetAddress">123 Nail St</span>
            <br />
            <span itemProp="addressLocality">Oldham</span>,{" "}
            <span itemProp="addressRegion">Greater Manchester</span>
            <br />
            <span itemProp="postalCode">OL1 1AA</span>
            <br />
            <a
              href="tel:+441612345678"
              itemProp="telephone"
              aria-label="Call M and M Nails at 0161 234 5678"
            >
              0161 234 5678
            </a>
          </p>
        </address>
      </footer>
    </>
  );
}
