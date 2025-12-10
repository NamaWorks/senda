import type { Metadata } from "next";

import "../styles/_all.scss";
import "./layout.scss";
import Footer from "@/components/elements/Footer/Footer";
import Nav from "@/components/elements/Nav/Nav";
import SmoothScrollProvider from "@/utils/providers/SmoothScrollProvider";
import ExperiencesContextProvider from "@/utils/contexts/context_providers/ExperiencesContextProvider";
import ComponentsContextProvider from "@/utils/contexts/context_providers/ComponentsContextProvider";
import AnimationsProvider from "@/utils/providers/AnimationsProvider";

export const metadata: Metadata = {
  title: "Senda - Adventure",
  description: "Transformative outdoor experiences for those who seek more than just adventure. Reconnect with nature, yourself, and others through movement, creativity and mindful exploration.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`body`}>
        <AnimationsProvider>
        <SmoothScrollProvider>
        <ExperiencesContextProvider>
        <ComponentsContextProvider>
          <Nav/>
            {children}
          <Footer/>
        </ComponentsContextProvider>
        </ExperiencesContextProvider>
        </SmoothScrollProvider>
        </AnimationsProvider>
      </body>
    </html>
  );
}