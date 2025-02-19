import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { initializeAmplitude } from "@/analytics/amplitude";
import ClientInitializer from "@/analytics/ClientInitializer";
import Footer from "../components/footer";

const InriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Potter's World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  initializeAmplitude();
  return (
    <html lang="en">
      <body className={`${InriaSans.variable} relative `}>
        <ClientInitializer />
        <Navbar />
        <div className="pb-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
