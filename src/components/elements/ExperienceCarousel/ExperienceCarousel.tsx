"use client";

import "./ExperienceCarousel.scss";

import { useContext, useEffect } from "react";
import { ExperiencesContext } from "@/utils/contexts/contexts";
import { ExperienceDataType, ExperiencesContextType } from "@/utils/types";
import { fetchData } from "@/utils/actions/serverActions/actions";

export default function ExperienceCarousel() {

  const { experiencesData, setExperiencesData, selectedExperience, setSelectedExperience } = useContext(ExperiencesContext) as ExperiencesContextType;


  useEffect(()=>{
    if(!experiencesData){ getData() }

    async function getData(){
      const data = await fetchData('experience');
      if(setExperiencesData) setExperiencesData(data as ExperienceDataType[])
    };

  },[experiencesData, setExperiencesData])

  return (
   <>
    <div className="carousel" id="experience-carousel">
      
    </div>
   </>
  );
}
