import { projects } from "../projectsData";

import { useState } from "react";

export function useProjectCarousel() {
   const [current, setCurrent] = useState(0);
   const [animating, setAnimating] = useState(false);
   const [slideDirection, setSlideDirection] = useState<"left" | "right" | "">("");

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