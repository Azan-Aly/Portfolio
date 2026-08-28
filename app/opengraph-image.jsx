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
}