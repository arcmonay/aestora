import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import { ChartIndex } from "@/components/ChartIndex";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const sans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const serif = IBM_Plex_Serif({
  variable: "--font-ibm-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Aestora — Medical Aesthetics",
    template: "%s · Aestora",
  },
  description:
    "Clinical protocols for body contouring, lymphatic drainage, microdermabrasion, and medical-grade skin. By appointment.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable} h-full`}
    >
      <body className="clinic antialiased">
        <Header />
        <div className="stage">
          <ChartIndex />
          <div className="sheet">
            <div className="sheet-inner">{children}</div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
