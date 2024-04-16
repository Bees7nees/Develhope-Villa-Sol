import { useEffect, useRef, useState } from "react";
import classes from "../styles/ReviewCardCarousel.module.scss";
import { ReviewCard } from "./ReviewCard";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export function ReviewCardCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 12; // Total number of slides
  const slideWidth = 100; // Width of each slide in %
  const contentRef = useRef(null);

  // Calculate the width of each slide and set the width of the .content element
  useEffect(() => {
    if (contentRef.current) {
      const contentWidth =
        slideCount * slideWidth * (contentRef.current.offsetWidth / 100);
      contentRef.current.style.width = `${contentWidth}px`;
    }
  }, []);

  // Update the scroll position of the .content element when the current slide index changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollLeft =
        currentSlide * slideWidth * (contentRef.current.offsetWidth / 100);
    }
  }, [currentSlide]);

  // Function to handle previous button click
  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideCount) % slideCount);
  };

  // Function to handle next button click
  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <button className={classes.prevButton} onClick={handlePrevClick}>
          <IoIosArrowBack style={{ fill: "black" }} />
        </button>
        <div className={classes.contentwrapper}>
          <div className={classes.content} ref={contentRef}>
            {[...Array(slideCount)].map((_, index) => (
              <ReviewCard key={index} style={{ width: `${slideWidth}%` }} />
            ))}
          </div>
        </div>
        <button className={classes.nextButton} onClick={handleNextClick}>
          <IoIosArrowForward style={{ fill: "black" }} />
        </button>
      </div>
    </div>
  );
}
