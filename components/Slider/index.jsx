import { useState, useRef, useEffect } from "react";
import { slideItems } from "@/helpers/slideItems";
import { Box, Typography, useTheme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  sliderWrapper,
  leftIconContainer,
  rightIconContainer,
  imageContainer,
  imageContainerHidden,
  imageTitle,
  imgInfo,
  slideContainer,
} from "./style";

const delay = 2500;
const ProductSlider = () => {
  const length = 2;
  const theme = useTheme();
  const [slideIdx, setSlideIdx] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(
      () =>
        setSlideIdx((prevSlideIdx) =>
          prevSlideIdx === length ? 0 : prevSlideIdx + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slideIdx, length]);

  const nextSlide = () => {
    if (slideIdx === length) {
      setSlideIdx(0);
      console.log(slideIdx);
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
    <Box
      sx={{
        ...sliderWrapper,
        width: `calc(100% - (${theme.spacing(8)} + 1px))`,
        border: "3px solid black",
      }}
    >
      <Box sx={leftIconContainer} onClick={prevSlide}>
        <ChevronLeft />
      </Box>
      {slideItems.map((slide) => (
        <>
          <Box
            key={slide.id}
            sx={{
              ...(slide.id === slideIdx
                ? imageContainer
                : imageContainerHidden),
              backgroundImage: `url(${slide.bg})`,
            }}
          >
            <Typography
              // variant={{ lg: "h3", md: "h4", sm: "h5" }}
              sx={imageTitle}
            >
              {slide.title}
              <Typography
                variant={{ lg: "h3", md: "h4", sm: "h5" }}
                sx={imgInfo}
              >
                {slide.info}
              </Typography>
            </Typography>
          </Box>
        </>
      ))}

      <Box sx={rightIconContainer} onClick={nextSlide}>
        <ChevronRight />
      </Box>
    </Box>
  );
};
export default ProductSlider;
