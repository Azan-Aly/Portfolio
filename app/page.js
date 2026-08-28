import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./Contact";
import Footer from "./components/Footer";

export default function Home() {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
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
