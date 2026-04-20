import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter( {subsets: ["latin"],} );

export const metadata: Metadata = {
  title: "Travel App",
  description: "App for travelling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth dark:bg-gray-90`}>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
