"use client";

import "./ExperienceCarousel.scss";

import { useContext, useEffect, useState } from "react";
import { ExperiencesContext } from "@/utils/contexts/contexts";
import { ExperienceDataType, ExperiencesContextType } from "@/utils/types";
import { fetchData } from "@/utils/actions/serverActions/actions";
import ExperienceButton from "@/components/ui/ExperienceButton/ExperienceButton";
import ItineraryElement from "../ItineraryElement/ItineraryElement";

export default function ExperienceCarousel() {

  const { experiencesData, setExperiencesData, selectedExperience, setSelectedExperience } = useContext(ExperiencesContext) as ExperiencesContextType;

  const [ experienceToShow, setExperienceToShow ] = useState<ExperienceDataType | undefined>(undefined);


  useEffect(()=>{
    if(!experiencesData){ getData() }
    async function getData(){
      const data = await fetchData('experience');
      if(setExperiencesData) setExperiencesData(data as ExperienceDataType[]);
    };

    if(experiencesData){getExperienceToShow()}
    async function getExperienceToShow() {
      const toShow = experiencesData?.find((exp)=>{return (exp as ExperienceDataType).acf.title.toString().toLowerCase() === selectedExperience?.toString().toLowerCase()});
      setExperienceToShow(toShow as ExperienceDataType);
    }
  }, [experiencesData, setExperiencesData, selectedExperience, setExperienceToShow]
)

  return (
    experiencesData && experienceToShow &&
   <>
    <div className="carousel" id="experience-carousel">

      <div className="carousel__texts">

        <div className="carousel__texts__heading">
          <p className="carousel__texts__heading__title">{experienceToShow.acf.hero.heading}</p>
          <p className="carousel__texts__heading__copy">{experienceToShow.acf.hero.description}</p>
        </div>

        <div className="carousel__texts__navigation">
          {
            experiencesData.map((exp, i)=>{return <ExperienceButton experience={`${exp?.acf.title.toLowerCase()}`} key={i}/>})
          }
        </div>

      </div>

      <div className="carousel__images"></div>

      <div className="carousel__location">
        <div className="carousel__location__container">
          <video>
            {/* <source src={experienceToShow.acf.location.video as string | "#"} type="video/mp4" /> */}
            <source src={"#"} type="video/mp4" />
          </video>
        </div>

        <div className="carousel__location__container">
          <p className="carousel__location__container__main">{experienceToShow.acf.location.main_}</p>
          <p className="carousel__location__container__copy">{experienceToShow.acf.location.small_copy}</p>
        </div>
      </div>

      <div className="carousel__itinerary">
        {
          Object.keys(experienceToShow.acf.itinerary).map((key, i)=>{
            return <ItineraryElement key={i} data={experienceToShow.acf.itinerary[key as keyof typeof experienceToShow.acf.itinerary]} />
          })
        }
      </div>
      
    </div>
   </>
  );
}
