import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./site-url";

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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${outfit.className} ${ovo.className} h-full antialiased overflow-x-hidden leading-8 scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try{
                const saved = localStorage.getItem("theme");
                const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                const initial = saved || system;
                if(initial === 'dark') document.documentElement.classList.add('dark');
              } catch (e){}
            })();`
          }}
        />
      </head>
      <body id="top" className="min-h-full flex flex-col dark:bg-[#11001F] dark:text-white">{children}</body>
    </html>
  );
}
