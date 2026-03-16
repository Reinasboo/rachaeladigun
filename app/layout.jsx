import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const baseURL = 'https://rachaeladigun.vercel.app';
const ogImage = `${baseURL}/api/og`;

export const metadata = {
  metadataBase: new URL(baseURL),
  title: 'Rachael Oyinlola Adigun | Executive Assistant & Virtual Operations Partner',
  description: 'Strategic Executive Assistant helping founders and organizations optimize operations, manage executive calendars, and streamline workflows. 4+ years of experience with proven results.',
  keywords: [
    'Executive Assistant',
    'Virtual Assistant',
    'Operations Management',
    'Executive Coordination',
    'Calendar Management',
    'Remote Support',
  ],
  authors: [{ name: 'Rachael Oyinlola Adigun' }],
  creator: 'Rachael Oyinlola Adigun',
  robots: 'index, follow',
  
  /* Open Graph - Facebook, WhatsApp, LinkedIn */
  openGraph: {
    title: 'Rachael Oyinlola Adigun | Executive Assistant & Virtual Operations Partner',
    description: 'Strategic Executive Assistant helping founders and organizations optimize operations, manage executive calendars, and streamline workflows. 4+ years of experience with proven results.',
    url: baseURL,
    siteName: 'Rachael Adigun - Executive Assistant',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Rachael Oyinlola Adigun - Executive Assistant & Virtual Operations Partner',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  /* Twitter Card - X */
  twitter: {
    card: 'summary_large_image',
    title: 'Rachael Oyinlola Adigun | Executive Assistant',
    description: 'Strategic Executive Assistant helping founders optimize operations, manage calendars, and streamline workflows.',
    image: ogImage,
    creator: '@RachaelAdigun',
  },
  
  /* Facebook and additional social */
  alternates: {
    canonical: baseURL,
  },
  
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rachael Oyinlola Adigun',
    jobTitle: 'Executive Assistant & Virtual Operations Partner',
    url: baseURL,
    image: ogImage,
    sameAs: [
      'https://linkedin.com/in/rachaeladigun',
      'https://twitter.com/RachaelAdigun',
    ],
    description:
      'Strategic Executive Assistant helping founders and organizations optimize operations, manage executive calendars, and streamline workflows.',
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+234-802-580-2987',
      email: 'adigunrachael6@gmail.com',
      areaServed: 'Worldwide',
      availableLanguage: 'en',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional metadata for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Pinterest */}
        <meta name="pinterest" content="nopin" description="Please don't save from this website" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
