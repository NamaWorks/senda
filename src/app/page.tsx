"use server";

import '../styles/_all.scss';
import './page.scss';

import { fetchData, fetchMedia } from '@/utils/actions/serverActions/actions';
import Image from 'next/image';
import Partner from '@/components/elements/Home/Partner/Partner';
import { HomeDataType, pageElementDataType } from '@/utils/types';
import ExperiencesHome from '@/components/elements/Home/ExperiencesHome/ExperiencesHome';
import { addDomAnimations } from '@/utils/actions/clientActions/domManipulation/addAnimations';

export default async function Home() {

  const content = (await fetchData('home')) as pageElementDataType;
  const homeData = content[0].acf as HomeDataType;
  const alexImage = await fetchMedia(homeData.about.alex_image);

  return (
      <main id='home'>

        <section className="home__hero">

          <div className="home__hero__top">
            <div className='home__hero__texts'>
              <h2 className='home__hero__texts__preheading'>{homeData.hero.pre_h1}</h2>
              <h1 className='home__hero__texts__heading'>{homeData.hero.heading_h1}</h1>
              <h2 className='home__hero__texts__postheading'>{homeData.hero.post_h1}</h2>
            </div>
            <div className="home__hero__square"></div>
          </div>

          <video loop autoPlay muted playsInline width="720">
            <source src={homeData.hero.video_background} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="home__hero__top-mountains">
            <Image src="https://moona.dev/senda/wp-content/uploads/2025/08/claim-top-blend.svg" alt="top of a mountain illustration" width={1512} height={244}/>
            <Image className='blend-difference' src="https://moona.dev/senda/wp-content/uploads/2025/08/claim-top.svg" alt="top of a mountain illustration" width={1512} height={241}/>
          </div>

        </section>

        <section className="home__claim">
          <div className='home__claim__texts'>
            <p className="home__claim__texts__coordinates">{homeData.claim.coordinates}</p>
            <p className="home__claim__texts__text">
              {homeData.claim.main_claim}
              {/* pending to add the image span */}
            </p>
          </div>
        </section>

        <section className="home__experiences">
          {/* We have the info for the climbing slide in the CMS */}
          {/* Here we should fetch the experiences data from the WP api in order to print it */}
          <ExperiencesHome/>
        </section>
        
        <section className="home__about">
          <div className="home__about__title">
            <h2 className="home__about__title__heading-a">{homeData.about.heading_01}</h2>
            <h2 className="home__about__title__heading-b">{homeData.about.heading_02}</h2>
          </div>

          <div className="home__about__founder">
            <p className="home__about__founder__text">
              {homeData.about.alex_description}
            </p>
            <div className="home__about__founder__picture">
              <Image src={alexImage?.guid.rendered as string} alt={alexImage?.alt_text as string} fill={true}></Image>
            </div>
          </div>

        </section>

        <section className="home__partners">
          <div className="home__partners__top-mountains">
            <Image className='blend-difference' src="https://moona.dev/senda/wp-content/uploads/2025/08/partners-top.svg" alt="top of a mountain illustration" width={1512} height={241}/>
          </div>
          <div className="home__partners__grid">
              {
                Object.keys(homeData.partners.brands).map((brand, i) => {
                  return (
                    <Partner 
                      brandName={homeData.partners.brands[brand].name} 
                      brandLogo={homeData.partners.brands[brand].logo } 
                      backgroundImage={homeData.partners.brands[brand].image_background} 
                      i={i} key={`home_partners_brand_${i}`}
                    />
                  )
                })
              }

            <h3 className='home__partners__title home__partners__grid-item'>{homeData.partners.heading}</h3>
            <p className='home__partners__copy home__partners__grid-item'>{homeData.partners.copy}</p>
          </div>
        </section>

      </main>
  );  
};