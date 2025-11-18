"use client";

import "./ExperienceCarousel.scss";

import { useContext, useEffect, useState } from "react";
import { ExperiencesContext } from "@/utils/contexts/contexts";
import { ExperienceDataType, ExperiencesContextType } from "@/utils/types";
import { fetchData, fetchMedia } from "@/utils/actions/serverActions/actions";
import ExperienceButton from "@/components/ui/ExperienceButton/ExperienceButton";
import ItineraryElement from "../ItineraryElement/ItineraryElement";
import { WPImage } from "@/utils/interfaces";
import Image from "next/image";


export default function ExperienceCarousel() {

  const { experiencesData, setExperiencesData, selectedExperience, setSelectedExperience } = useContext(ExperiencesContext) as ExperiencesContextType;

  const [ experienceToShow, setExperienceToShow ] = useState<ExperienceDataType | undefined>(undefined);

  const [ experiencesImages, setExperiencesImages ] = useState<Array<WPImage | undefined>>([undefined])


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

useEffect(()=>{
  async function getImg () {
    if (experiencesData) {
      const newArr = await Promise.all(
        experiencesData.map(async (experience) => {
          if (typeof experience?.acf.hero.image === "number") {
            return await fetchMedia(experience.acf.hero.image);
          }
        })
      )
      setExperiencesImages(newArr);
    }
  };
  
  getImg();

}, [setExperiencesImages, experiencesData])

  return (
    experiencesData &&
    experienceToShow && (
      <>
        <div className="carousel" id="experience-carousel">
          <div className="carousel__texts">
            <div className="carousel__texts__heading">
              <p className="carousel__texts__heading__title" data-animation="paragraph">
                {experienceToShow.acf.hero.heading}
              </p>
              <p className="carousel__texts__heading__copy">
                {experienceToShow.acf.hero.description}
              </p>
            </div>

            <div className="carousel__texts__navigation">
              {experiencesData.map((exp, i) => {
                return (
                  <ExperienceButton
                    experience={`${exp?.acf.title.toLowerCase()}`}
                    key={i}
                  />
                );
              })}
            </div>
          </div>

          <div className="carousel__images">
            {experiencesImages &&
              experiencesImages.map((image, i) => {
                return (
                  <div
                    className="carousel__images__image"
                    key={`image-experience-${i}`}
                  >
                    <Image
                      src={`${image?.guid.rendered}`}
                      alt={`${image?.alt_text}`}
                      // fill={true}
                      width={200}
                      height={200}
                      key={`experience-image-${i}`}
                    />
                    <p></p>
                  </div>
                );
              })}
          </div>

          <div className="carousel__location">
            <div className="carousel__location__container carousel__location__video__container">
              <div className="carousel__location__video__content">
                <video loop autoPlay muted playsInline width="640">
                  <source
                    src={experienceToShow.acf.location.video as string | "#"}
                    type="video/mp4"
                  />
                  {/* <source src={"#"} type="video/mp4" /> */}
                </video>
              </div>
            </div>

            <div className="carousel__location__container carousel__location__texts__container">
              <p className="carousel__location__container__main" data-animation="paragraph" >
                {experienceToShow.acf.location.main_}
              </p>
              <p className="carousel__location__container__copy" data-animation="paragraph">
                {experienceToShow.acf.location.small_copy}
              </p>
            </div>
          </div>

          <div className="carousel__itinerary">
            {Object.keys(experienceToShow.acf.itinerary).map((key, i) => {
              return (
                <ItineraryElement
                  key={i}
                  data={
                    experienceToShow.acf.itinerary[
                      key as keyof typeof experienceToShow.acf.itinerary
                    ]
                  }
                />
              );
            })}
          </div>
        </div>
      </>
    )
  );
}
