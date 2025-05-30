import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/globals/navbar";
import { Fragment_Mono } from "next/font/google";

const Author = localFont({
  src: "../../public/fonts/Author-Medium.otf",
  variable: "--font-author",
});

const fragment = Fragment_Mono({
  subsets: ["latin"],
  variable: "--font-fragment",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Luntra-infrastructure",
  description: "Experience blazing-fast transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Author.variable} ${fragment.variable} antialiased font-author`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
