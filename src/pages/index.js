import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from 'next/image';

// ...

<Image
  src="/images/nail4.jpeg"
  alt={`Nail design ${i + 1}`}
  width={300}
  height={300}
  className={styles.galleryImage}
/>


export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "M&M Nails",
    image: "https://mm-nails.example.com/images/og-image.jpg",
    telephone: "+441612345678",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hamilton Street",
      addressLocality: "Oldham",
      addressRegion: "Greater Manchester",
      postalCode: "OL1 1AA",
      addressCountry: "UK",
    },
    url: "https://mm-nails.example.com/",
    description:
      "M&M Nails is Oldham's premium nail salon offering expert manicures, pedicures, and nail art in a hygienic and friendly environment.",
  };

  return (
    <>
      <Head>
        <title>
          M&M Nails - Premium Nail Salon in Oldham | Manicures & Pedicures
        </title>
        <meta
          name="description"
          content="Visit M&M Nails in Oldham for expert manicures, pedicures, and stunning nail art. Friendly service, hygienic environment, and beautiful nails await you."
        />
        <meta
          name="keywords"
          content="nail salon, manicure, pedicure, nail art, Oldham, beauty, nail designs, professional nails"
        />
        <meta name="author" content="M&M Nails" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://mm-nails.example.com/" />

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
          content="https://mm-nails.example.com/images/og-image.jpg"
        />

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
      </Head>

      <main className={styles.main}>
        <header>
          <h1 className={styles.title}>
            Welcome to <strong>M&M Nails</strong>
            <br />
            Oldham&apos;s Premium Nail Salon

          </h1>
          <p className={styles.description}>
            Located in the heart of Oldham, M&M Nails offers premium manicure
            and pedicure services tailored to your style. Whether you're looking
            for elegant nail art or a relaxing treatment, our Oldham nail salon
            provides a hygienic and friendly environment for all your beauty
            needs.
          </p>
          <a
            href="tel:+441612345678"
            className={styles.callButton}
            aria-label="Call M and M Nails at 0161 234 5678"
          >
            Call Now: 0161 234 5678
          </a>
        </header>

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
              src="/images/nail4.jpeg"
              alt={`Nail design ${i + 1}`}
              width={300}
              height={300}
              className={styles.galleryImage}
            />
            ))}
          </div>
        </section>
        <section className={styles.localSeo}>
  <h2>Why Choose M&M Nails in Oldham?</h2>
  <p>
    Located in the heart of Oldham, M&M Nails is your go-to destination for professional manicures,
    pedicures, and bespoke nail art. Whether you're prepping for a special occasion or just want
    beautiful, healthy nails, our experienced nail technicians offer the highest quality service in a
    friendly, hygienic environment. Visit us today and see why Oldham locals trust us for their nail care.
  </p>

  <h3>Frequently Asked Questions</h3>
  <ul>
    <li><strong>Where is M&M Nails located?</strong><br/> We&apos;re based in central Oldham, near [insert landmark if applicable].</li>
    <li><strong>Do I need to book an appointment?</strong><br/> Walk-ins are welcome, but we recommend calling ahead for availability.</li>
    <li><strong>What services do you offer?</strong><br/> We offer manicures, pedicures, acrylics, gel nails, and custom nail art.</li>
  </ul>
</section>

      </main>
      <footer className={styles.footer}>
  <address itemScope itemType="https://schema.org/PostalAddress">
    <p>
      <strong itemProp="name">M&M Nails</strong><br />
      <span itemProp="streetAddress">123 Nail St</span><br />
      <span itemProp="addressLocality">Oldham</span>,{' '}
      <span itemProp="addressRegion">Greater Manchester</span><br />
      <span itemProp="postalCode">OL1 1AA</span><br />
      <a href="tel:+441612345678" itemProp="telephone">0161 234 5678</a>
    </p>
  </address>
</footer>

    </>
  );
}
