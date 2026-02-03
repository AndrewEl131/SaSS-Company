import type { Metadata } from "next";
import "./globals.css";
import Header from "@/Components/Header";
import { Radio_Canada_Big, Source_Serif_4 } from "next/font/google";
import Footer from "@/Components/Footer";

const radioCanada = Radio_Canada_Big({
  subsets: ["latin"],
  variable: "--font-radio",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${radioCanada.variable} ${sourceSerif.variable}`}>
      <body
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
