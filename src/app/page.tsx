import { fetchData } from '@/utils/actions/serverActions/actions';
import './page.scss';
import Image from 'next/image';
import Partner from '@/components/elements/Home/Partner/Partner';

export default async function Home() {

  const content = (await fetchData('home')).acf;
  console.log(content.hero.video_background)

  return (
    <main id='home'>

      <section className="home__hero">
        <h2 className='home__hero__preheading'>{content.hero.pre_h1}</h2>
        <h1 className='home__hero__heading'>{content.hero.heading_h1}</h1>
        <h2 className='home__hero__postheading'>{content.hero.post_h1}</h2>

        <video loop autoPlay muted playsInline controls width="720">
          <source src={content.hero.video_background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </section>

      <section className="home__claim">
        <p className="home__claim__coordinates">{content.claim.coordinates}</p>
        <p className="home__claim__text">
          {content.claim.main_claim}
          {/* pending to add the image span */}
        </p>
      </section>

      <section className="home__experiences">
        {/* Here we should fetch the experiences data from the WP api in order to print it */}
      </section>
      
      <section className="home__about">
        <div className="home__about__title">
          <h2 className="home__about__title__heading-a">{content.about.heading_01}</h2>
          <h2 className="home__about__title__heading-b">{content.about.heading_02}</h2>
        </div>

        <div className="home__about__founder">
          <p className="home__about__founder__text">
            {content.about.alex_description}
          </p>
          <div className="home__about__founder__picture">
            <Image src={content.about.alex_image.link} alt={content.about.alex_image.alt} fill={true} ></Image>
          </div>
        </div>
      </section>

      <section className="home__partners">
        {
          // Object.keys(content.partners.brands).map((brand, i) => {
            // return (
              // <Partner 
              //   brandName={content.partners.brands[brand].name} 
              //   brandLogo={content.partners.brands[brand].logo} 
              //   backgroundImage={content.partners.brands[brand].image_background.id} 
              //   i={i} key={`home_partners_brand_${i}`}
              // />
            // )
          // })
        }

        <h3>{content.partners.heading}</h3>
        <p>{content.partners.copy}</p>
      </section>

    </main>
  );
}
