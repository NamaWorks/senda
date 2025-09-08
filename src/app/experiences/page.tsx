import type { Metadata } from "next";

import ExperienceCarousel from "@/components/elements/ExperienceCarousel/ExperienceCarousel";
import "./page.scss";
import Faq from "@/components/elements/Faq/Faq";

export const metadata: Metadata = {
  title: "Senda - Experiences",
  description: "",
};

export default function Experiences() {



  return (
   <>
    <main className="experiences" id="experiences">
      <ExperienceCarousel/>
    </main>

    <Faq/>
   </>
  );
}
