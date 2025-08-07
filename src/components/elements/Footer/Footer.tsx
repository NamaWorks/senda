import "./Footer.scss";

import { fetchComponent, fetchMedia } from "@/utils/actions/serverActions/actions"
import Image from "next/image"

export default async function Footer(){

  // const content = await fetchData('component') as ComponentsDataType;
  // const footerData = (content.find((item, i) => { return content[i].acf.component_selector === "footer" }) as ComponentDataType).acf.footer;

  const content = await fetchComponent('footer');
  const logoData = await fetchMedia(content.acf.footer?.logo as number);
  const imageDirectionData = await fetchMedia(content.acf.footer?.image as number);

  console.log(content.acf.footer)


  return (
    <footer>
      <div className="footer__divider footer__brand">
        <div className="footer__brand__logo">
          <Image 
            src={logoData?.guid.rendered as string}
            alt={logoData?.alt_text as string}
            fill={true}
          />
        </div>

        <div className="footer__brand__description">{
          (content.acf.footer?.description as string).split(/<br>/).map((line, i) => {
            return (
              <p key={i}>{line}</p>
            )})
          }
        </div>
      </div>

      <div className="footer__divider footer__direction">
          <Image 
            src={imageDirectionData?.guid.rendered as string} 
            alt={imageDirectionData?.alt_text as string}
            fill={true}
          />
          <div className="footer__direction__text">
            {
              (content.acf.footer?.direction as string).split(/<br>/).map((line, i) => {
                return (
                  <p key={i}>{line}</p>
                )
              })
            }
          </div>
          <p className="footer__direction__copyright">{ content.acf.footer?.copyright }</p>
      </div>

      <div className="footer__divider footer__contact">
        <a href={content.acf.footer?.cta_email.url} target={content.acf.footer?.cta_email.target} type="email" className="footer__contact__email">{content.acf.footer?.cta_email.title}</a>
        <a href={content.acf.footer?.cta_phone.url} target={content.acf.footer?.cta_phone.target} type="phone" className="footer__contact__phone">{content.acf.footer?.cta_phone.title}</a>
      </div>
      
      <div className="footer__divider footer__marquee">
        <a href={content.acf.footer?.cta_marquee.url} target={content.acf.footer?.cta_marquee.target} className="footer__marquee__text">{content.acf.footer?.cta_marquee.title}</a>
      </div>
    </footer>
  )
}