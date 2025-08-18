// "use server";
// "use client";

import "./Partner.scss";

import { fetchMedia } from "@/utils/actions/serverActions/actions";
// import { WPImage } from "@/utils/interfaces";
import Image from "next/image";
// import { useEffect, useState } from "react";

export default async function Partner ({ brandName, brandLogo, backgroundImage, i }: {brandName: string, brandLogo: number | string | undefined, backgroundImage: number | string | undefined, i: number}) {
// export default function Partner ({ brandName, brandLogo, backgroundImage, i }: {brandName: string, brandLogo: number | string | undefined, backgroundImage: number | string | undefined, i: number}) {

  // const [ brandLogoWpImage, setBrandLogoWpImage ] = useState<WPImage | undefined>(undefined);
  // const [ backgroundImageWpImage, setBackgroundImageWpImage ] = useState<WPImage | undefined>(undefined);

  // useEffect(()=>{
  //   const fetchImages = async () => {
  //     const logo = await fetchMedia(brandLogo ? brandLogo : 'https://moona.dev/senda/wp-content/uploads/2025/08/partners-top.svg');
  //     const bg = await fetchMedia(backgroundImage ? backgroundImage : 'https://moona.dev/senda/wp-content/uploads/2025/08/partners-top.svg');
  
  //     setBrandLogoWpImage(logo);
  //     setBackgroundImageWpImage(bg);
  //   }
  //   fetchImages();
  // },[brandLogo, backgroundImage])
  
      const brandLogoWpImage = await fetchMedia(brandLogo ? brandLogo : 0);
      const backgroundImageWpImage = await fetchMedia(backgroundImage ? backgroundImage : 0);

  return (
    <div
      key={`home_partners_brand_${i}`}
      className="home__partners__brand home__partners__grid-item"
      id={`partner_${i}`}
    >
      <h4>{brandName}</h4>
      <div className="home__partners__brand__logo">
        <Image 
          src={brandLogoWpImage?.guid.rendered as string} 
          fill={true} 
          alt={brandLogoWpImage?.alt_text as string || brandLogoWpImage?.title.rendered as string}
        />
      </div>
      <div className="home__partners__brand__image">
        <Image 
          src={backgroundImageWpImage?.guid.rendered as string} 
          fill={true} 
          alt={backgroundImageWpImage?.alt_text as string || brandLogoWpImage?.title.rendered as string}
        />
      </div>
    </div>
  )
};