import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
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
  openGraph: {
    title: 'Rachael Oyinlola Adigun | Executive Assistant & Virtual Operations Partner',
    description: 'Strategic Executive Assistant helping founders and organizations optimize operations, manage executive calendars, and streamline workflows.',
    url: 'https://rachaeladigun.vercel.app',
    siteName: 'Rachael Adigun Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rachael Oyinlola Adigun | Executive Assistant',
    description: 'Strategic Executive Assistant helping founders optimize operations.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
