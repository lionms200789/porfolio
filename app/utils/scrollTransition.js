import { gsap } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const scrollTransition = ({ target, from, to }) => {
  gsap.fromTo(
    target,
    {
      opacity: 0,
      ...from,
    },
    {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        once: true,
        trigger: target,
        start: "center bottom",
      },
      ...to,
    }
  );
};
