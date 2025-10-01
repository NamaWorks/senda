"use client";

import { useContext, useEffect, useState } from "react";
import "./ExperiencesHome.scss";
import { ExperiencesContext } from "@/utils/contexts/contexts";
import { ExperienceDataType, ExperiencesContextType } from "@/utils/types";
import { fetchData } from "@/utils/actions/serverActions/actions";

export default function ExperiencesHome () {

  const { experiencesData, setExperiencesData, selectedExperience, setSelectedExperience } = useContext(ExperiencesContext) as ExperiencesContextType;

  const [ highlightedExperience, setHighlightedExperience ] = useState<ExperienceDataType | undefined>(undefined);


  useEffect(()=>{
    if(!experiencesData){ getData() }
    async function getData(){
      const data = await fetchData('experience');
      if(setExperiencesData) setExperiencesData(data as ExperienceDataType[]);
    };

    if(experiencesData){getExperienceToShow()}
    async function getExperienceToShow() {
      const toShow = experiencesData?.find((exp)=>{return (exp as ExperienceDataType).acf.title.toString().toLowerCase() === selectedExperience?.toString().toLowerCase()});
      setHighlightedExperience(toShow as ExperienceDataType);
    }
  }, [experiencesData, setExperiencesData, highlightedExperience, setHighlightedExperience]
)

  return (
    <>
      <p>{experiencesData?.map((exp,i)=>{return (exp?.acf.title)})}</p>
    </>
  )
};