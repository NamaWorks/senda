import { CtaInterface, FaqInterface, LinkInterface, PartnerInterface, WPImage } from "./interfaces";

export type ApiResponseType = ComponentsDataType | pageElementDataType;

export type pageElementDataType = 
  Array<PageDataType>
;

export type PageDataType = {
  id: number,
  // acf: HomeDataType,
  acf: HomeDataType | AboutDataType,
};

// home data type
export type HomeDataType = {
  hero: HomeHeroDataType,
  claim: HomeClaimDataType,
  about: HomeAboutDataType,
  experiences: HomeExperiencesDataType,
  partners: HomePartnersDataType,
};

type HomeHeroDataType = {
  heading_h1: string,
  pre_h1: string,
  post_h1: string,
  video_background: string,
};

type HomeClaimDataType = {
  main_claim: string,
  coordinates: string,
  span_image: WPImage
};

type HomeAboutDataType = {
  alex_description: string,
  alex_image: number,
  heading_01: string,
  heading_02: string,
};

type HomeExperiencesDataType = {
  arrow: boolean,
  button: string,
  climbing_text: string,
  climbing_title: string,
  hashtag: string,
};

type HomePartnersDataType = {
  brands: Record<string | number | symbol, PartnerInterface>,
  heading: string,
  copy: string,
};

// about page data type
export type AboutDataType = {
  hero: AboutHeroDataType,
  values: AboutValuesDataType,
  video: AboutVideoDataType
};

type AboutHeroDataType = {
  heading: string,
  span_image: number,
  images: {
    image_01: number,
    image_02: number,
    image_03: number
  },
};

type AboutValuesDataType = {
  texts: {
    copy: string,
    heading: string
  },
  items: {
    [key: string]: {
      index: string,
      text: string
    }
  }
};

type AboutVideoDataType = {
  heading: string,
  play_button: string,
  play_icon: number,
  video_background: string
};

// components data type
export type ComponentsDataType =
  Array<ComponentDataType>
;

export type ComponentDataType = {
  id: number,
  acf: ComponentACFDataType,
};

export type ComponentACFDataType = {
  component_selector: string,
  footer?: FooterDataType,
  nav_bar?: NavDataType,
  faq?: FaqDataType,
};

type FooterDataType = {
  logo: number,
  copyright: string,
  cta_email: CtaInterface,
  cta_marquee: CtaInterface,
  cta_phone: CtaInterface,
  description: string,
  direction: string,
  image: number,
  marquee_span: number,
};

type NavDataType = {
  image_01: number,
  image_02: number,
  about: LinkInterface,
  climbing: LinkInterface,
  yoga: LinkInterface,
  photography: LinkInterface,
  hiking: LinkInterface,
  email: LinkInterface,
  phone: LinkInterface,
  menu: string,
  close: string,
  logo: number,
};

type FaqDataType = {
  [key: `faq_${string}`]: FaqInterface;
};