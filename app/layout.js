import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Porfolio - Azan Ali",
  description: "Muhammad Azan Ali - A FullStack Developer | NEXT.JS | MERN STACK | ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.className} ${ovo.className} h-full antialiased overflow-x-hidden leading-8 scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
