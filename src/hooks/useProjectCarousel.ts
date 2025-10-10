import { projects } from "../projectsData";

import { useState, useEffect } from "react";

export function useProjectCarousel() {
   const [current, setCurrent] = useState(0);
   const [animating, setAnimating] = useState(false);
   const [slideDirection, setSlideDirection] = useState<"left" | "right" | "">("");

   useEffect(() => {
      const preloadPrev = new Image();
      if (projects[current - 1]) preloadPrev.src = projects[current - 1].image;

      const preloadNext = new Image();
      if (projects[current + 1]) preloadNext.src = projects[current + 1].image;
   }, [current]);

   const handlePrev = () => {
      if (current > 0) {
         setSlideDirection("right");
         setAnimating(true);
         setTimeout(() => {
            setCurrent(current - 1);
            setAnimating(false);
            setSlideDirection("");
         }, 300);
      }
   };

   const handleNext = () => {
      if (current < projects.length - 1) {
         setSlideDirection("left");
         setAnimating(true);
         setTimeout(() => {
            setCurrent(current + 1);
            setAnimating(false);
            setSlideDirection("");
         }, 300);
      }
   };

   return {
      current,
      project: projects[current],
      animating,
      slideDirection,
      handlePrev,
      handleNext,
      isFirst: current === 0,
      isLast: current === projects.length - 1,
   };
};