import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TotalView AI — AI Call Analytics for Contact Centres",
    template: "%s — TotalView AI",
  },
  description:
    "Turn 100% of your call recordings into business intelligence. AI-powered QA, coaching, and compliance for contact centres.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://total-view.co.uk"
  ),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "TotalView AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
