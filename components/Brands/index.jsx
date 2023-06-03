import { useState, useRef, useEffect } from "react";
import { brands } from "@/helpers/clientsData";
import { Box, Typography } from "@mui/material";
import {
  brandsSectionContainer,
  brandsTitle,
  brandsTitleContainer,
  slide,
  slideImgContainer,
  slideshow,
  slideshowDot,
  slideshowDotActive,
  slideshowDots,
  slideshowSlider,
  titleDevider,
} from "./style";
import Image from "next/image";

const delay = 2500;
const length = 15;

const Brands = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) => (prevIndex === length - 4 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <Box sx={brandsSectionContainer}>
        <Box sx={brandsTitleContainer}>
          <Typography sx={brandsTitle}>Our Clients</Typography>
          <Typography sx={titleDevider}></Typography>
        </Box>

        <Box sx={slideshow}>
          <Box
            sx={{
              ...slideshowSlider,
              transform: `translateX(${-index * 210}px)`,
            }}
          >
            {brands?.map((brand, index) => (
              <Box key={index} sx={slideImgContainer}>
                <Image
                  src={brand}
                  alt="clients"
                  width={200}
                  height={200}
                  className={slide}
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={slideshowDots}>
          {brands?.map((_, idx) => (
            <>
              <Box
                key={idx}
                sx={index === idx ? slideshowDotActive : slideshowDot}
                onClick={() => {
                  setIndex(idx);
                }}
              ></Box>
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default Brands;
