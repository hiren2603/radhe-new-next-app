import React, { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import { slideItems } from "@/helpers/slideItems";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  sliderWrapper,
  leftIconContainer,
  imageContainer,
  imageContainerHidden,
  imageTitle,
  slideImage,
  imgInfo,
  rightIconContainer,
} from "./style";

const delay = 2500;
const Slider = () => {
  const length = slideItems.length - 1;
  const [slideIdx, setSlideIdx] = useState(0);
  const timeoutRef = useRef(null);

  const resestTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resestTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideIdx((prevSlideIdx) =>
          prevSlideIdx === length ? 0 : prevSlideIdx + 1
        ),
      delay
    );

    return () => {
      resestTimeout();
    };
  }, [slideIdx, length]);

  const nextSlide = () => {
    if (slideIdx === length) {
      setSlideIdx(0);
    } else {
      setSlideIdx(slideIdx + 1);
    }
  };

  const prevSlide = () => {
    if (slideIdx === 0) {
      setSlideIdx(length);
    } else {
      setSlideIdx(slideIdx - 1);
    }
  };
  return (
    <>
      <Box sx={sliderWrapper}>
        <Box sx={leftIconContainer} onClick={prevSlide}>
          <ChevronLeftIcon />
        </Box>

        {slideItems.map((slide, idx) => (
          <>
            <Box
              sx={idx === slideIdx ? imageContainer : imageContainerHidden}
              key={idx}
            >
              <Box>{slide.image}</Box>

              <h1 className={imageTitle}>
                {slide.title}
                <Typography sx={imgInfo}>{slide.info}</Typography>
              </h1>
            </Box>
          </>
        ))}

        <Box sx={rightIconContainer} onClick={nextSlide}>
          <ChevronRightIcon />
        </Box>
      </Box>
    </>
  );
};

export default Slider;
