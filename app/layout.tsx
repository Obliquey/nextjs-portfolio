import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Links from "./components/links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anders Boyum",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gradient-to-br from-slate-800 from-70% to-indigo-800">
      <body className="">
        <Nav />
        {/* Will want the navbar, a socials header, and a contact me footer in the bottom right */}
        {children}
      <Links />
      </body>
    </html>
  );
}