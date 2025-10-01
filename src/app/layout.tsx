import type { Metadata } from "next";

import "../styles/_all.scss";
import "./layout.scss";
import Footer from "@/components/elements/Footer/Footer";
import Nav from "@/components/elements/Nav/Nav";
import SmoothScrollProvider from "@/utils/providers/SmoothScrollProvider";
import ExperiencesContextProvider from "@/utils/contexts/context_providers/ExperiencesContextProvider";
import ComponentsContextProvider from "@/utils/contexts/context_providers/ComponentsContextProvider";

export const metadata: Metadata = {
  title: "Senda - Adventure",
  description: "Transformative outdoor experiences for those who seek more than just adventure. Reconnect with nature, yourself, and others through movement, creativity and mindful exploration.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
  <SmoothScrollProvider>
  <ExperiencesContextProvider>
  <ComponentsContextProvider>
    <html lang="en">
      <body className={`body`}>
        <Nav/>
          {children}
        <Footer/>
      </body>
    </html>
  </ComponentsContextProvider>
  </ExperiencesContextProvider>
  </SmoothScrollProvider>
  );
}