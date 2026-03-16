import { ImageResponse } from 'next/og';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            opacity: 0.1,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            zIndex: 10,
          }}
        >
          {/* Headline */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              margin: 0,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Rachael Oyinlola Adigun
          </h1>

          {/* Subtitle */}
          <h2
            style={{
              fontSize: '32px',
              color: '#0f172a',
              margin: 0,
              fontWeight: '600',
            }}
          >
            Executive Assistant & Virtual Operations Partner
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: '20px',
              color: '#475569',
              margin: 0,
              maxWidth: '600px',
              textAlign: 'center',
              lineHeight: '1.6',
            }}
          >
            Strategic support for founders, executives & organizations. 4+ years of proven results.
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: '24px',
              fontSize: '18px',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e40af' }}>4+</div>
              <div style={{ color: '#64748b' }}>Years Experience</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e40af' }}>20+</div>
              <div style={{ color: '#64748b' }}>Executives Supported</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e40af' }}>99%</div>
              <div style={{ color: '#64748b' }}>Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* URL at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            color: '#64748b',
          }}
        >
          rachaeladigun.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: 'twemoji',
    }
  );
}
