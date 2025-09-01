"use client";

import { fetchData, fetchMedia } from "@/utils/actions/serverActions/actions";
import "./page.scss";
import { AboutDataType, pageElementDataType } from "@/utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { WPImage } from "@/utils/interfaces";

export default function About() {

  const [ aboutData, setAboutData ] = useState<AboutDataType>();
  const [ imagesToPrint, setImagesToPrint ] = useState<Array<WPImage>>();

  useEffect(()=>{
    async function getData () {
      const data = await fetchData('about') as pageElementDataType
      setAboutData(data && data[0].acf as AboutDataType)
    };

    getData();
  },[]);

  useEffect(()=>{
    async function getMedia() {
      const imagesArr = await Promise.all(
        Object.keys(aboutData?.hero.images || {}).map((image) =>
          fetchMedia(aboutData?.hero.images[image as keyof typeof aboutData.hero.images] as number)
        )
      );
      setImagesToPrint(imagesArr);
    }
    if (aboutData?.hero.images) getMedia();
  },[aboutData]);
  
  console.log(imagesToPrint)
  
  return (
   <>
    <main className="about">

      <section className="about__hero">
        <div className="about__hero__container">
          <p className="about__hero__text">
            {aboutData?.hero.heading}
          </p>
        </div>
      </section>

      <section className="about__images">
        <div className="about__images__item">
          <Image src={imagesToPrint && imagesToPrint[0].guid.rendered || '#'} alt={imagesToPrint && imagesToPrint[0].alt_text || '#'} fill={true}/>
        </div>
        <div className="about__images__item empty__item">
        </div>
        <div className="about__images__item">
          <Image src={imagesToPrint && imagesToPrint[1].guid.rendered || '#'} alt={imagesToPrint && imagesToPrint[1].alt_text || '#'} fill={true}/>
        </div>
        <div className="about__images__item">
          <Image src={imagesToPrint && imagesToPrint[2].guid.rendered || '#'} alt={imagesToPrint && imagesToPrint[2].alt_text || '#'} fill={true}/>
        </div>
      </section>

      <section className="about__values">
        <div className="about__values__container">
          {
            Object.keys(aboutData?.values.items || {}).map((item, i)=>{
              return (
                <div className="about__values__value" key={`value__${i}`}>
                  <p className="value__index">{aboutData?.values.items[item as keyof typeof aboutData.values.items].index}</p>
                  <p className="value__text">{aboutData?.values.items[item as keyof typeof aboutData.values.items].text}</p>
                </div>
              )
            })
          }
        </div>
      </section>

    </main>
   </>
  );
}
