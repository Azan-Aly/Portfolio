<<<<<<< HEAD
import { ImageResponse } from 'next/og'

export const alt = 'Muhammad Azan Ali, full-stack developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#fdf4ff',
        color: '#171717',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{ color: '#a21caf', fontSize: 32, fontWeight: 700 }}>AZAN ALI</div>
      <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24 }}>Full-Stack Developer</div>
      <div style={{ color: '#525252', fontSize: 34, marginTop: 24 }}>React | Next.js | Node.js | MongoDB</div>
      <div style={{ color: '#525252', fontSize: 28, marginTop: 48 }}>Based in Pakistan</div>
    </div>,
    size,
  )
=======
import { ImageResponse } from "next/og";

export const alt = "Muhammad Azan Ali - Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8fafc",
          color: "#111827",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <div style={{ color: "#c026d3", display: "flex", fontSize: 28 }}>
          PORTFOLIO
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            marginTop: 24,
          }}
        >
          Muhammad Azan Ali
        </div>
        <div
          style={{
            color: "#4b5563",
            display: "flex",
            fontSize: 38,
            marginTop: 20,
          }}
        >
          Full-Stack Developer | React | Next.js | Node.js
        </div>
        <div
          style={{
            background: "#111827",
            borderRadius: 999,
            color: "#ffffff",
            display: "flex",
            fontSize: 24,
            marginTop: 48,
            padding: "14px 28px",
            width: "fit-content",
          }}
        >
          Building scalable web experiences from Pakistan
        </div>
      </div>
    ),
    size,
  );
>>>>>>> f55d68a80a1c84120c7554afb2ba9de194f49b30
}