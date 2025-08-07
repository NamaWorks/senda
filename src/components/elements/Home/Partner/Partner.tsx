"use server";

import "./Partner.scss";

import { fetchMedia } from "@/utils/actions/serverActions/actions";
import Image from "next/image";

export default async function Partner ({ brandName, brandLogo, backgroundImage, i }: {brandName: string, brandLogo: number | string | undefined, backgroundImage: number | string | undefined, i: number}) {

  const brandLogoWpImage = await fetchMedia(brandLogo ? brandLogo : '');
  const backgroundImageWpImage = await fetchMedia(backgroundImage ? backgroundImage : '');

  return (
    <div
      key={`home_partners_brand_${i}`}
      className="home__partners__brand"
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