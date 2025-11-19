"use client";

import { ComponentDataType } from "@/utils/types";
import { WPImage } from "@/utils/interfaces";
import "./Nav.scss";

import React, { useEffect, useRef, useState } from "react";
import {
  fetchComponent,
  fetchMedia,
} from "@/utils/actions/serverActions/actions";

import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import ExperienceButton from "@/components/ui/ExperienceButton/ExperienceButton";
import { navAnimationEnter, navAnimationOut } from "@/utils/actions/clientActions/animations/navAnimations/navAnimations";

export default function Nav() {
  const [toggled, setToggled] = useState<boolean>(false);
  const [toggledVisibility, setToggledVisibility] = useState<boolean>(false);
  const [navData, setNavData] = useState<null | undefined | ComponentDataType>(null);
  const [imageA, setImageA] = useState<WPImage | undefined>(undefined);
  const [imageB, setImageB] = useState<WPImage | undefined>(undefined);

  const imageARef = useRef(null);
  const imageBRef = useRef(null);

  // useEffect for fetching data
  useEffect(() => {
    const getData = async () => {
      const data = await fetchComponent("nav_bar");
      setNavData(data);

      setImageA(await fetchMedia(data.acf.nav_bar?.image_01 as number));
      setImageB(await fetchMedia(data.acf.nav_bar?.image_02 as number));
    };
    getData();
  }, []);

  // useEffect for controlling the images animations
  useEffect(()=>{
    if(toggled && imageARef.current && imageBRef){
      navAnimationEnter();
    } else {
      navAnimationOut();
      setTimeout(() => {
        setToggledVisibility(false)
      }, 1000);
    };
  }, [ imageARef, imageBRef, toggled ])

  return (
    <nav>
      <div className="nav__permanent">
        <div className="nav__permanent__logo">
        <Button fnc={handleLogoClick} icon={`logo`}/>
        </div>
        <div className="nav__permanent__btn">
          <Button
            copy={toggled ? "close" : "menu"}
            fnc={() => {
              if(!toggled){
                setToggled(!toggled);
                setToggledVisibility(!toggledVisibility);
              } else if(toggled){
                setToggled(!toggled)
              }
            }}
            // icon={`none`}
          />
        </div>
      </div>

      {toggledVisibility && (
        <>
          <div className="nav__toggle">
            <div className="nav__toggle__bg"></div>
            <div className="nav__toggle__half">
              <div className="nav__toggle__half__image" id="nav__toggle__half__image__a" ref={imageARef}>
                <Image
                  alt="image"
                  src={imageA?.guid?.rendered || "none"}
                  fill={true}
                />
              </div>

              <div className="nav__toggle__half__image" id="nav__toggle__half__image__b" ref={imageBRef}>
                <Image
                  alt="image"
                  src={imageB?.guid?.rendered || "none"}
                  fill={true}
                />
              </div>
            </div>

            <div className="nav__toggle__half nav__toggle__links">

              <div className="nav__toggle__half__side">
                <Link 
                  href={navData?.acf.nav_bar?.about.url as string} 
                  className="nav__toggle__half__side__links"
                  onClick={()=>{setToggled(false)}}
                  >
                    {navData?.acf.nav_bar?.about.title}
                </Link>
                <div className="nav__toggle__half__side__navigation">
                  <Link
                    className="nav__toggle__half__side__links"
                    href={"experiences/" + navData?.acf.nav_bar?.climbing.url as string}
                    onClick={()=>{setToggled(false)}}
                  >
                    {navData?.acf.nav_bar?.climbing.title}
                  </Link>

                  <ul>
                    <li className="nav__toggle__half__side__links"
                      onClick={()=>{setToggled(false); redirect('experiences')}}
                    >
                      <ExperienceButton experience={navData?.acf.nav_bar?.hiking.title.replaceAll('+',"") as string} />
                    </li>

                    <li className="nav__toggle__half__side__links"
                      onClick={()=>{setToggled(false); redirect('experiences')}}
                    >
                      <ExperienceButton experience={navData?.acf.nav_bar?.yoga.title.replaceAll('+',"") as string} />
                    </li>
                    <li className="nav__toggle__half__side__links"
                      onClick={()=>{setToggled(false); redirect('experiences')}}
                    >
                      <ExperienceButton experience={navData?.acf.nav_bar?.photography.title.replaceAll('+',"") as string} />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="nav__toggle__half__side nav__toggle__contact">
                <Link
                  className="nav__toggle__half__side__links"
                  href={navData?.acf.nav_bar?.email.url as string}
                  target={navData?.acf.nav_bar?.email.target}
                >
                  {navData?.acf.nav_bar?.email.title}
                </Link>
                <Link
                  className="nav__toggle__half__side__links"
                  href={navData?.acf.nav_bar?.phone.url as string}
                  target={navData?.acf.nav_bar?.phone.target}
                >
                  {navData?.acf.nav_bar?.phone.title}
                </Link>
              </div>

            </div>
          </div>
        </>
      )}
    </nav>
  );
}

function handleLogoClick(): void {
  redirect("/")
}
