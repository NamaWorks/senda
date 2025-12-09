"use client";

import "./ExperienceCarousel.scss";

import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ExperiencesContext } from "@/utils/contexts/contexts";
import { ExperienceDataType, ExperiencesContextType } from "@/utils/types";
import { fetchData, fetchMedia } from "@/utils/actions/serverActions/actions";
import ExperienceButton from "@/components/ui/ExperienceButton/ExperienceButton";
import ItineraryElement from "../ItineraryElement/ItineraryElement";
import { WPImage } from "@/utils/interfaces";
import Image from "next/image";
import { paragraphIn, paragraphOut, titleIn, titleOut } from "@/utils/actions/clientActions/animations/actionTriggered/textInteractionAnimations";
import { addTextScrollAnimations } from "@/utils/actions/clientActions/animations/scrollTriggered/textScrollAnimations";


export default function ExperienceCarousel() {

  const { experiencesData, setExperiencesData, selectedExperience, setSelectedExperience } = useContext(ExperiencesContext) as ExperiencesContextType;
  const [ experiencesImages, setExperiencesImages ] = useState<Array<{experience: string, image: WPImage|undefined} | undefined>>([undefined]);
  const [ experienceToShow, setExperienceToShow ] = useState<ExperienceDataType | undefined>(undefined);
  const [ currentExperience, setCurrentExperience ] = useState<ExperienceDataType | undefined>(undefined);

  const headingTitleRef = useRef(null);
  const headingCopyRef = useRef(null);
  const locationMainRef = useRef(null);
  const locationCopyRef = useRef(null);
  const currentExperienceRef = useRef(currentExperience);
  

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

  }, 
  [experiencesData, setExperiencesData, selectedExperience, setExperienceToShow])

  useEffect(()=>{
    async function getImg () {
      if (experiencesData) {
        const newArr = await Promise.all(
          experiencesData.map(async (experience) => {
            if (typeof experience?.acf.hero.image === "number") {
              const media = await fetchMedia(experience.acf.hero.image);
              return {experience: experience.acf.title, image:media}
            }
          })
        )
        setExperiencesImages(newArr);
      }
    };
    
    getImg();

  }, [setExperiencesImages, experiencesData])


// pseudo code block
// for the animations when we change the selectedExperience, we should prevent the changes from being executed, store the new selection of the selectedExperience, make the exit animation of the elements, then set the new selected experience and execute the intro animation for those elements

// ---

useEffect(()=>{
  currentExperienceRef.current = currentExperience;
},[currentExperience])

useEffect(() => {

  const current = currentExperienceRef.current;

  if (!current){
    setCurrentExperience(experienceToShow);
  } else {
    if (headingTitleRef.current && headingCopyRef.current && locationMainRef.current && locationCopyRef.current ) {

    titleOut(headingTitleRef.current);
    paragraphOut(headingCopyRef.current);
    paragraphOut(locationMainRef.current);
    (locationMainRef.current as HTMLLinkElement).style.opacity = '0';
    paragraphOut(locationCopyRef.current);
    (locationCopyRef.current as HTMLLinkElement).style.opacity = '0';

    setTimeout(() => {
      setCurrentExperience(experienceToShow);
      addTextScrollAnimations();

      setTimeout(() => {
        if( headingTitleRef.current && headingCopyRef.current && locationMainRef.current && locationCopyRef.current ) {            
          titleIn(headingTitleRef.current);
          paragraphIn(headingCopyRef.current);
          paragraphIn(locationMainRef.current);
          paragraphIn(locationCopyRef.current);
        }

      }, 100);

    }, 1000);
  }
  }

} , [experienceToShow])

// ---


  return (
    experiencesData &&
    experienceToShow && (
      <>
        <div className="carousel" id="experience-carousel">
          <div className="carousel__texts">
            <div className="carousel__texts__heading">
              <p className="carousel__texts__heading__title" data-animation="paragraph" ref={headingTitleRef}>
                {currentExperience?.acf.hero.heading}
              </p>
              <p className="carousel__texts__heading__copy" ref={headingCopyRef}>
                {currentExperience?.acf.hero.description}
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
            <div className="carousel__images__container">
            {experiencesImages &&
              experiencesImages.map((image, i) => {
                return (
                  <div
                  className={`carousel__images__image ${selectedExperience === image?.experience.toLowerCase() ? 'selected' : ""}`}
                  key={`image-experience-${i}`}
                  >
                    <Image
                      src={`${image?.image?.guid.rendered}`}
                      alt={`${image?.image?.alt_text}`}
                      // fill={true}
                      data-exp={`${image?.experience}`}
                      fill={true}
                      key={`experience-image-${i}`}
                      />
                    <p></p>
                  </div>
                );
              })}
              </div>
          </div>

          <div className="carousel__location">
            <div className="carousel__location__container carousel__location__video__container">
              <div className="carousel__location__video__content">
                <video loop autoPlay muted playsInline width="640">
                  <source
                    src={experienceToShow?.acf.location.video as string | "https://moona.dev/senda/wp-content/uploads/2025/09/senda_exp_video_02.mp4"}
                    // src={currentExperience?.acf.location.video as string | "#"}
                    type="video/mp4"
                  />
                  {/* <source src={"#"} type="video/mp4" /> */}
                </video>
              </div>
            </div>

            <div className="carousel__location__container carousel__location__texts__container">
              <p className="carousel__location__container__main" data-animation="paragraph" ref={locationMainRef}>
                {currentExperience?.acf.location.main_}
              </p>
              <p className="carousel__location__container__copy" data-animation="paragraph" ref={locationCopyRef}>
                {currentExperience?.acf.location.small_copy}
              </p>
            </div>
          </div>

          <div className="carousel__itinerary">
            {currentExperience && Object.keys(currentExperience?.acf.itinerary).map((key, i) => {
              return (
                <ItineraryElement
                  key={i}
                  data={
                    currentExperience.acf.itinerary[
                      key as keyof typeof currentExperience.acf.itinerary
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
