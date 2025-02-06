import { Montserrat, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// IBM Plex Mono mit sans-serif fallback
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  fallback: ['sans-serif'],
});

// Montserrat mit sans-serif fallback
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['500'],
  fallback: ['sans-serif'],
});

export const metadata = {
  title: 'Constructa Bau',
  description: 'Ihr Partner für Garten- und Landschaftsbau sowie Tiefbauarbeiten.',

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${montserrat.variable} ${ibmPlexMono.variable} antialiased`}
        style={{
          fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
