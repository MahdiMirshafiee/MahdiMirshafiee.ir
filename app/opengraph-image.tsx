import { ImageResponse } from 'next/og'

export const alt = 'Mahdi Mirshafiee — Full-Stack Web Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: '#0c0a09',
          color: '#e7e5e4',
          padding: '72px 80px',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#78716c',
          }}
        >
          MIR~$ whoami
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
          }}
        >
          <div style={{ display: 'flex', fontSize: 92, fontWeight: 700 }}>
            Mahdi Mirshafiee
          </div>
          <div style={{ display: 'flex', fontSize: 42, color: '#d6d3d1' }}>
            Full-Stack Web Developer
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 30,
            color: '#78716c',
          }}
        >
          <div style={{ display: 'flex' }}>
            TypeScript / Next.js / React / Node.js
          </div>
          <div style={{ display: 'flex' }}>mahdimirshafiee.ir</div>
        </div>
      </div>
    ),
    size
  )
}
