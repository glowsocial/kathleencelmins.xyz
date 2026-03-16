import { Playfair_Display, Courier_Prime } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-courier",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kathleencelmins.xyz"),
  title: {
    default: "Kathleen Celmins",
    template: "%s — Kathleen Celmins",
  },
  description:
    "Thoughts, essays, and reflections by Kathleen Celmins.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kathleencelmins.xyz",
    siteName: "Kathleen Celmins",
    title: "Kathleen Celmins",
    description:
      "Thoughts, essays, and reflections by Kathleen Celmins.",
  },
  twitter: {
    card: "summary",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${courierPrime.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
