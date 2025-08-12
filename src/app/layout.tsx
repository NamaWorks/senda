import type { Metadata } from "next";
// import { Geist_Mono } from "next/font/google";

import "../styles/_all.scss";
import "./layout.scss";

import Footer from "@/components/elements/Footer/Footer";
import Nav from "@/components/elements/Nav/Nav";

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Senda - Adventure",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`body`}>
        <Nav/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
