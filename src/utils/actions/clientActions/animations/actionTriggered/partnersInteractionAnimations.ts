import { gsap } from "gsap";
import { addAnimatedElementTag, animatedTagChecker } from "../../domManipulation/elementAnimatedTags";

export function initPartnersHoverAnimation () {
  const partnersCards = document.querySelectorAll('.home__partners__brand');
  partnersCards.forEach((item, i) =>{
    if(animatedTagChecker(item)){ // this is for checking if the element has been already animated
      item.addEventListener('mouseover', (e)=>{
        const bgImage = (e.target as Element).querySelector('.home__partners__brand__image');
        gsap.to(bgImage, {
          // scale: 1,
          width: '100%',
          duration: .5,
          ease: "power3.out",
        })
      })

      item.addEventListener('mouseout', (e)=>{
        const bgImage = (e.target as Element).querySelector('.home__partners__brand__image');
        gsap.to(bgImage, {
          // scale: 0,
          width: '0%',
          duration: .5,
          ease: "power3.in",
        })
      })
      addAnimatedElementTag(item);
    };
  });
};