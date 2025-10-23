export const smoothScroll = () => {
  let scrollTimeout: number | null = null;
  let scrollAmount = 0;

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();

    scrollAmount += event.deltaY/2;
    if (!scrollTimeout) {
      scrollTimeout = window.requestAnimationFrame(smoothStep);
    }
  };

  const smoothStep = () => {
    window.scrollBy(0, scrollAmount * 0.4);
    scrollAmount *= 0.9;
    if (Math.abs(scrollAmount) > 0.5) {
      scrollTimeout = window.requestAnimationFrame(smoothStep);
    } else {
      scrollTimeout = null;
      scrollAmount = 0;
    }
  };

  window.addEventListener('wheel', handleWheel, { passive: false });
};