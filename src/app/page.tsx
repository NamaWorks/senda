import { fetchData, fetchMedia } from '@/utils/actions/serverActions/actions';
import './page.scss';
import Image from 'next/image';
import Partner from '@/components/elements/Home/Partner/Partner';
import { pageElementDataType } from '@/utils/types';

export default async function Home() {

  const content = (await fetchData('home')) as pageElementDataType;
  const homeData = content[0].acf;
  const alexImage = await fetchMedia(homeData.about.alex_image);

  return (
    <main id='home'>

      <section className="home__hero">
        <h2 className='home__hero__preheading'>{homeData.hero.pre_h1}</h2>
        <h1 className='home__hero__heading'>{homeData.hero.heading_h1}</h1>
        <h2 className='home__hero__postheading'>{homeData.hero.post_h1}</h2>

        <video loop autoPlay muted playsInline controls width="720">
          <source src={homeData.hero.video_background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </section>

      <section className="home__claim">
        <p className="home__claim__coordinates">{homeData.claim.coordinates}</p>
        <p className="home__claim__text">
          {homeData.claim.main_claim}
          {/* pending to add the image span */}
        </p>
      </section>

      <section className="home__experiences">
        {/* Here we should fetch the experiences data from the WP api in order to print it */}
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

        <h3>{homeData.partners.heading}</h3>
        <p>{homeData.partners.copy}</p>
      </section>

    </main>
  );
}
