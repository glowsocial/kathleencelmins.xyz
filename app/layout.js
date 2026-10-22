import { Inter, JetBrains_Mono, Ms_Madi, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif-body",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const script = Ms_Madi({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.kathleencelmins.xyz"),
  title: {
    default: "Kathleen Celmins — Everything, in writing.",
    template: "%s — Kathleen Celmins",
  },
  description:
    "Personal writing by Kathleen Celmins. Notes on work, books, life, and the things still taking shape.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kathleencelmins.xyz",
    siteName: "Kathleen Celmins",
    title: "Kathleen Celmins — Everything, in writing.",
    description:
      "Personal writing by Kathleen Celmins. Notes on work, books, life, and the things still taking shape.",
    images: [
      {
        url: "/images/kathleen-celmins-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kathleen Celmins, founder of boomp.net",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/kathleen-celmins-og.jpg"],
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${serif.variable} ${script.variable}`} suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}",
          }}
        />
        <a href="#main" className="skip-link">Skip to writing</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
