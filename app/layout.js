import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kathleencelmins.xyz"),
  title: {
    default: "Kathleen Celmins — Everything, out loud.",
    template: "%s — Kathleen Celmins",
  },
  description:
    "Everything, out loud. Writing, building, and noticing — by Kathleen Celmins.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kathleencelmins.xyz",
    siteName: "Kathleen Celmins",
    title: "Kathleen Celmins — Everything, out loud.",
    description:
      "Everything, out loud. Writing, building, and noticing — by Kathleen Celmins.",
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
