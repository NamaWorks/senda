import Image from "next/image";

export default function Partner ({ brandName, brandLogo, backgroundImage, i }: {brandName: string, brandLogo: number | string | undefined, backgroundImage: number | string | undefined, i: number}) {

  return (
    <div
      key={`home_partners_brand_${i}`}
      className="home__partners__brand"
    >
      <h4>{brandName}</h4>
      <div className="home__partners__brand__logo">
        <p>{brandLogo}</p>
        {/* <Image src={brandLogo}/>   */}
      </div>
      <div className="home__partners__brand__image">
        <p>{backgroundImage}</p>
        {/* <Image src={brandLogo}/>   */}
      </div>
    </div>
  )
};