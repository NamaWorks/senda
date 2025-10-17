"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import "./ExperiencesHome.scss";
import { ExperiencesContext } from "@/utils/contexts/contexts";
import { ExperienceDataType, ExperiencesContextType } from "@/utils/types";
import { fetchData, fetchMedia } from "@/utils/actions/serverActions/actions";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import { WPImage } from "@/utils/interfaces";

export default function ExperiencesHome () {

  const { experiencesData, setExperiencesData, selectedExperience, setSelectedExperience } = useContext(ExperiencesContext) as ExperiencesContextType;

  const [ highlightedExperience, setHighlightedExperience ] = useState<ExperienceDataType | undefined>(undefined);

  const [ experienceImage, setExperienceImage] = useState<WPImage | undefined>(undefined);

  
  const getData = useCallback(
    async () => {
      const data = await fetchData('experience');
      if(setExperiencesData) setExperiencesData(data as ExperienceDataType[]);
    },
    [setExperiencesData]
  )

  const getExperienceToShow = useCallback(
    async () => {
      const toShow = experiencesData?.find((exp)=>{return (exp as ExperienceDataType).acf.title.toString().toLowerCase() === selectedExperience?.toString().toLowerCase()});

      setHighlightedExperience(toShow);
      setExperienceImage(await fetchMedia(Number(toShow?.acf.home.image)))
    }
    ,
    [experiencesData, selectedExperience]
  )

  useEffect(()=>{
    if(!experiencesData){ getData() }
  }, [experiencesData, setExperiencesData, getData]);

  useEffect(()=>{
      if(experiencesData){
        getExperienceToShow()
      } else {
        getData();
        getExperienceToShow();
      }

  }, [highlightedExperience, setHighlightedExperience, getExperienceToShow, getData, experiencesData]);

  return (
    <>
      <p>{experiencesData?.map((exp,i)=>{return (exp?.acf.title)})}</p>
      <p>{selectedExperience}</p>

      <div className="home__experiences">
        <div className="home__experiences__container home__experiences__tabs">
          {
            experiencesData?.map((experience, i) => {
              if(i<3){
                return (
                  <div key={`home-tab-${experience?.id}-${i}`} className="home__experiences__tabs__tab">
                    <div className="home__experiences__tabs__tab__index">
                      <p>00{i+1}</p>
                    </div>
                    <div className="home__experiences__tabls__tab__index__box">
                      <p>+ {experience?.acf.title}</p>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
        <div className="home__experiences__container home__experiences__selected">
          <div className="home__experiences__selected__texts">
            <p className="home__experience__selected__heading">{highlightedExperience?.acf.home.heading}</p>
            <p className="home__experience__selected__description">{highlightedExperience?.acf.home.description}</p>
          </div>
          <div className="home__experiences__selected__buttons">
              <Button copy={`#${highlightedExperience?.acf.home.tab.name}`} fnc={()=>{console.log('test')}} round={false}/>
              <Button copy="Start now" fnc={()=>{console.log('test')}} icon="right_arrow"/>
          </div>
        </div>

      <div className="home__experiences__image">
        <Image fill={true} src={`${experienceImage?.guid.rendered}`} alt={`${highlightedExperience?.acf.home.image}`}/>
      </div>

      </div>
    </>
  )
};