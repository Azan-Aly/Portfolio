import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./site-url";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Azan Ali | Full-Stack Developer",
    template: "%s | Muhammad Azan Ali",
  },
  description:
    "Muhammad Azan Ali is a Pakistan-based full-stack developer building scalable web applications with React, Next.js, Node.js, and MongoDB.",
  applicationName: "Muhammad Azan Ali Portfolio",
  keywords: [
    "Muhammad Azan Ali",
    "Azan Ali",
    "Azandotdevpages",
    "azan pages dev",
    "software engineer Pakistan",
    "software developer Pakistan",
    "full-stack developer Pakistan",
    "MERN stack developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "React Native developer",
    "web application development",
  ],
  authors: [{ name: "Muhammad Azan Ali" }],
  creator: "Muhammad Azan Ali",
  publisher: "Muhammad Azan Ali",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl || undefined,
    siteName: "Muhammad Azan Ali Portfolio",
    title: "Muhammad Azan Ali | Full-Stack Developer in Pakistan",
    description:
      "Explore the portfolio of Muhammad Azan Ali, a Pakistan-based full-stack developer specializing in React, Next.js, Node.js, and MongoDB.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Muhammad Azan Ali, full-stack developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Azan Ali | Full-Stack Developer in Pakistan",
    description:
      "Pakistan-based full-stack developer building scalable web applications with React, Next.js, Node.js, and MongoDB.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Azan Ali",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    sameAs: [
      "https://github.com/Azan-Aly",
      "https://www.linkedin.com/in/azanaly/",
      "https://facebook.com/mr.azanaly",
      "https://www.instagram.com/mr.azan_aly"
    ],
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed"
    },
    description: "Pakistan-based full-stack developer building scalable web applications with React, Next.js, Node.js, and MongoDB."
  };

  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${outfit.className} ${ovo.className} h-full antialiased overflow-x-hidden leading-8 scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body id="top" className="min-h-full flex flex-col dark:bg-[#11001F] dark:text-white">
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`
            (function() {
              try{
                const saved = localStorage.getItem("theme");
                const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                const initial = saved || system;
                if(initial === 'dark') document.documentElement.classList.add('dark');
              } catch (e){}
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
