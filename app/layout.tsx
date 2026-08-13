import type { Metadata } from "next";
import { Bodoni_Moda, IBM_Plex_Sans } from "next/font/google";
import { CompareBar } from "@/components/CompareBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartProvider } from "@/lib/cart-context";
import { CompareProvider } from "@/lib/compare-context";
import "./globals.css";

const machine = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spec = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Aestora — Professional Beauty & Aesthetic Equipment",
    template: "%s · Aestora",
  },
  description:
    "Commercial equipment for spas, salons, med spas, and clinics. Lymphatic, facial, contouring machines. Financing available, subject to approval.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${machine.variable} ${spec.variable} h-full`}>
      <body className="house antialiased">
        <CartProvider>
          <CompareProvider>
            <Header />
            <main>{children}</main>
            <CompareBar />
            <Footer />
          </CompareProvider>
        </CartProvider>
      </body>
    </html>
  );
}
