import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const cleanSiteUrl = siteUrl.replace(/\/$/, "");

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${cleanSiteUrl}/#person`,
        name: "Muhammad Azan Ali",
        alternateName: ["Azan Ali", "Azan Dev"],
        url: cleanSiteUrl,
        jobTitle: "Full-Stack Developer",
        description:
          "Pakistan-based full-stack developer specializing in React, Next.js, Node.js, Express, MongoDB, and AI-assisted web applications.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PK",
        },
        sameAs: [
          "https://github.com/Azan-Aly",
          "https://www.linkedin.com/in/azanaly/",
          "https://facebook.com/mr.azanaly",
          "https://www.instagram.com/mr.azan_aly",
        ],
        knowsAbout: [
          "Full-Stack Web Development",
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "React Native",
          "RESTful APIs",
          "GraphQL",
          "TypeScript",
          "Tailwind CSS",
          "AI Application Integration",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${cleanSiteUrl}/#website`,
        url: cleanSiteUrl,
        name: "Muhammad Azan Ali Portfolio",
        description: "Official portfolio of Muhammad Azan Ali, Full-Stack Developer based in Pakistan.",
        publisher: {
          "@id": `${cleanSiteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${cleanSiteUrl}/#webpage`,
        url: cleanSiteUrl,
        name: "Muhammad Azan Ali | Full-Stack Developer in Pakistan",
        isPartOf: {
          "@id": `${cleanSiteUrl}/#website`,
        },
        about: {
          "@id": `${cleanSiteUrl}/#person`,
        },
        mainEntity: {
          "@id": `${cleanSiteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="top">
        <Header />
        <About />
        <TechStack />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
