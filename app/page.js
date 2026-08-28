import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./Contact";
import Footer from "./components/Footer";

export default function Home() {
<<<<<<< HEAD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Muhammad Azan Ali Portfolio",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    mainEntity: {
      "@type": "Person",
      name: "Muhammad Azan Ali",
      jobTitle: "Full-Stack Developer",
      description:
        "Full-stack developer based in Pakistan specializing in React, Next.js, Node.js, and MongoDB.",
      url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
      sameAs: [
        "https://github.com/Azan-Aly",
        "https://www.linkedin.com/in/azanaly/",
      ],
      knowsAbout: ["React", "Next.js", "Node.js", "MongoDB", "JavaScript"],
    },
=======
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
      "React Native",
      "REST APIs",
      "GraphQL",
    ],
>>>>>>> f55d68a80a1c84120c7554afb2ba9de194f49b30
  };

  return (
    <>
      <script
        type="application/ld+json"
<<<<<<< HEAD
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
=======
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <main id="top">
>>>>>>> f55d68a80a1c84120c7554afb2ba9de194f49b30
        <Header />
        <About />
        <TechStack />
        <Services />
<<<<<<< HEAD
        <Work />
        <Contact />
      </main>
      <Footer />
=======
      </main>
>>>>>>> f55d68a80a1c84120c7554afb2ba9de194f49b30
    </>
  );
}
