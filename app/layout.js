import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Muhammad Azan Ali | Full-Stack Developer in Pakistan",
    template: "%s | Muhammad Azan Ali",
  },
  description:
    "Muhammad Azan Ali is a full-stack developer in Pakistan building scalable web apps with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Muhammad Azan Ali",
    "Azan Ali",
    "software engineer Pakistan",
    "software developer Pakistan",
    "full-stack developer Pakistan",
    "MERN stack developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "React Native developer",
    "Cross Platform App developer",
  ],
  authors: [{ name: "Muhammad Azan Ali" }],
  creator: "Muhammad Azan Ali",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: "Muhammad Azan Ali | Full-Stack Developer in Pakistan",
    description:
      "Explore the portfolio of Muhammad Azan Ali, a Pakistan-based full-stack developer specializing in React, Next.js, Node.js, and MongoDB.",
    siteName: "Muhammad Azan Ali",
    locale: "en_PK",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Muhammad Azan Ali, full-stack developer" }],
  },
  twitter: {
    card: "summary",
    title: "Muhammad Azan Ali | Full-Stack Developer in Pakistan",
    description:
      "Portfolio of Muhammad Azan Ali, a full-stack developer building modern web applications.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.className} ${ovo.className} h-full antialiased overflow-x-hidden leading-8 scroll-smooth`}
    >
      <body id="top" className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
