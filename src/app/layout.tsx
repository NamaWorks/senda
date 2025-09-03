import type { Metadata } from "next";

import "../styles/_all.scss";
import "./layout.scss";
import Footer from "@/components/elements/Footer/Footer";
import Nav from "@/components/elements/Nav/Nav";
import SmoothScrollProvider from "@/utils/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Senda - Adventure",
  description: "",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
  <SmoothScrollProvider>
    <html lang="en">
      <body className={`body`}>
        <Nav/>
          {children}
        <Footer/>
      </body>
    </html>
  </SmoothScrollProvider>
  );
}