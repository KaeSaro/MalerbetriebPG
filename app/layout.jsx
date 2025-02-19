import { Montserrat, Fira_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// fira mit sans-serif fallback
const fira = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
  weight: ["500"],
  fallback: ["sans-serif"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  // weight: ["400"],

  fallback: ["sans-serif"],
});

export const metadata = {
  title: "Malerbetrieb | Pascal Gerdes",
  description: "Ihr Partner für Malerarbeiten.",

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
        <link
          rel="icon"
          href="/faviconmb.svg"
          sizes="any"
          type="image/svg+xml"
        ></link>
      </head>
      <body
        className={`${fira.variable} ${montserrat.variable} relative antialiased font-montserrat`}
        style={{
          fontFamily: "Montserrat, Helvetica Neue, Helvetica, sans-serif",
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
