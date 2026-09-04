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
    default: "Kathleen Celmins, founder of boomp.net",
    template: "%s — Kathleen Celmins",
  },
  description:
    "Kathleen Celmins built boomp.net, software that runs social media for business owners who'd rather not do it themselves. Essays on building and running it.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kathleencelmins.xyz",
    siteName: "Kathleen Celmins",
    title: "Kathleen Celmins, founder of boomp.net",
    description:
      "Kathleen Celmins built boomp.net, software that runs social media for business owners who'd rather not do it themselves. Essays on building and running it.",
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
