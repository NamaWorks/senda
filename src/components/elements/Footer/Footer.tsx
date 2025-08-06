import { fetchComponent, fetchMedia } from "@/utils/actions/serverActions/actions"
import Image from "next/image"

export default async function Footer(){

  // const content = await fetchData('component') as ComponentsDataType;
  // const footerData = (content.find((item, i) => { return content[i].acf.component_selector === "footer" }) as ComponentDataType).acf.footer;

  const content = await fetchComponent('footer');
  // const logoData = await fetchMedia(content.acf.footer?.logo as number);
  // console.log(logoData)

  return (
    <footer>
      <div className="footer__divider">
        <div className="footer__logo">
          {/* <Image 
            src={logoData?.guid.rendered as string}
            alt={logoData?.alt_text as string}
            // fill={true}
            height={100} 
            width={100}
          /> */}
        </div>

        {/* <p className="footer__description">{
          (content.acf.footer?.description as string).split(/<br>/).map( (line, i) => {
            return (
              <p key={i}>{line}</p>
            )} )
        }</p> */}
      </div>

      <div className="footer__divider">
        <div className="footer__image">
          {/* <Image 
            src={imageData?.guid.rendered as string} 
            alt={imageData?.alt_text as string}
            height={100}
            width={100}
          /> */}
        </div>
      </div>

      <div className="footer__divider"></div>
    </footer>
  )
}