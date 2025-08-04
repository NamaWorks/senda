import { PartnerInterface, WPImage } from "./interfaces";

export type ApiResponseType = {
  id: number,
  acf: HomeDataType,
};

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
  alex_image: WPImage,
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