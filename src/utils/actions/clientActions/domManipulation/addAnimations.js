export function addDomAnimations () {

  window.DOMContentLoaded = () => {
    addTitleAnimation();
  }
};

function addTitleAnimation () {
  const title = document.querySelector('.home__hero__texts__heading');
  console.log(title)
};