import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/globals/navbar";

const Author = localFont({
  src: "../../public/fonts/Author-Medium.otf",
  variable: "--font-author",
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
        className={`${Author.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
