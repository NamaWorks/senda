"use client";

import { Dispatch, SetStateAction, useCallback, useContext, useEffect, useState } from "react";
import "./ExperiencesHome.scss";
import { ExperiencesContext } from "@/utils/contexts/contexts";
import { ExperienceDataType, ExperiencesContextType } from "@/utils/types";
import { fetchData, fetchMedia } from "@/utils/actions/serverActions/actions";
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import { WPImage, WPImageACF } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import { paragraphIn, paragraphOut, titleIn, titleOut } from "@/utils/actions/clientActions/animations/buttonTriggered/textButtonAnimations";

export default function ExperiencesHome () {

  const { experiencesData, setExperiencesData, selectedExperience, setSelectedExperience } = useContext(ExperiencesContext) as ExperiencesContextType;

  const [ highlightedExperience, setHighlightedExperience ] = useState<ExperienceDataType | undefined>(undefined);

  const [ experienceImage, setExperienceImage] = useState<WPImage | WPImageACF | undefined>(undefined);

  const router = useRouter();

  
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
      const experienceImage = await fetchMedia(Number(toShow?.acf.home.image));
      setExperienceImage(experienceImage);
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
      <div className="home__experiences">
        <div className="home__experiences__container home__experiences__tabs">
          {experiencesData?.map((experience, i) => {
            // only render the first three and when a title exists
            const title = experience?.acf?.title;
            if (i < 3 && title) {
              return (
                <div
                  key={`home-tab-${experience?.id}-${i}`}
                  className="home__experiences__tabs__tab"
                  onClick={() => {
                    if(selectedExperience !== title) handleTagClick(setSelectedExperience, title)
                  }}
                >
                  <div className="home__experiences__tabs__tab__index">
                    <p>00{i + 1}</p>
                  </div>
                  <div className="home__experiences__tabs__tab__box">
                    <p>+ {title}</p>
                  </div>
                </div>
              );
            }
            return null;
          })}

          <div
            className="home__experiences__tabs__tab"
            onClick={()=>{
              router.push('/experiences')
            }}
          >
            <div className="home__experiences__tabs__tab__index">
              <p>Many more</p>
            </div>
            <div className="home__experiences__tabs__tab__box">
              <Image fill={true} src={'https://moona.dev/senda/wp-content/uploads/2025/08/Senda_Assets_23_11_11zon.webp'} alt={'climbing rope image'}/>
            </div>
          </div>
        </div>
        <div className="home__experiences__container home__experiences__selected">
          {(() => {
            const heading = highlightedExperience?.acf?.home?.heading ?? "";
            const description = highlightedExperience?.acf?.home?.description ?? "";
            const tabName = highlightedExperience?.acf?.home?.tab?.name ?? "";
            return (
              <>
                <div className="home__experiences__selected__texts">
                  <p className="home__experiences__selected__heading">{heading}</p>
                  <p className="home__experiences__selected__description" data-animation="paragraph">{description}</p>
                </div>
                <div className="home__experiences__selected__buttons">
                  <Button
                    copy={tabName ? `#${tabName}` : ""}
                    fnc={() => {
                      router.push('/experiences');
                    }}
                    round={false}
                  />
                  <Button
                    copy="Start now"
                    fnc={() => {
                      router.push('/experiences')
                    }}
                    icon="right_arrow"
                  />
                </div>
              </>
            );
          })()}
        </div>

        <div className="home__experiences__image">
          {experienceImage?.guid?.rendered && (
            <Image
              fill={true}
              src={experienceImage.guid.rendered}
              alt={String(highlightedExperience?.acf?.home?.image ?? "")}
            />
          )}
        </div>
      </div>
    </>
  );
};

function handleTagClick (setSelectedExperience:Dispatch<SetStateAction<string | undefined>> | undefined, title:string) {
    // if(setSelectedExperience) {
    titleOut('.home__experiences__selected__heading');
    paragraphOut('.home__experiences__selected__description');
    setTimeout(() => {
      if(setSelectedExperience)setSelectedExperience(title as string);
      setTimeout(() => {
        titleIn('.home__experiences__selected__heading')
        paragraphIn('.home__experiences__selected__description')
      }, 100);
    }, 1000);
  // }
};