export default function manifest() {
  return {
    name: "Muhammad Azan Ali | Full-Stack Developer",
    short_name: "Azan Ali",
    description:
      "Portfolio of Muhammad Azan Ali, a Pakistan-based full-stack developer specializing in React, Next.js, Node.js, and MongoDB.",
    start_url: "/",
    display: "standalone",
    background_color: "#11001F",
    theme_color: "#11001F",
    orientation: "portrait",
    categories: ["portfolio", "developer", "technology"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    lang: "en",
  };
}