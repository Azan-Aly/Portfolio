import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Azan Ali",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    jobTitle: "Full-Stack Developer",
    description:
      "Pakistan-based full-stack developer specializing in React, Next.js, Node.js, and MongoDB.",
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
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "React Native",
      "REST APIs",
      "GraphQL",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
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
