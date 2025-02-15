import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";

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
  return (
    <html lang="en">
      <body
        className={`${InriaSans.variable}  antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
