import { Inter, JetBrains_Mono, Bodoni_Moda } from "next/font/google";
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

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.kathleencelmins.xyz"),
  title: {
    default: "Kathleen Celmins — Everything, in writing.",
    template: "%s — Kathleen Celmins",
  },
  description:
    "Everything, in writing. Essays on building boomp.net and what running it teaches — by Kathleen Celmins.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kathleencelmins.xyz",
    siteName: "Kathleen Celmins",
    title: "Kathleen Celmins — Everything, in writing.",
    description:
      "Everything, in writing. Essays on building boomp.net and what running it teaches — by Kathleen Celmins.",
  },
  twitter: {
    card: "summary",
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
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${bodoni.variable}`} suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}",
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
