import { Box, useTheme, styled, Stack, useMediaQuery } from "@mui/material";
import {
  resCardRow,
  cardRow,
  resCardContainer,
  cardContainer,
  cardImageContainer,
  cardBtnContainer,
} from "./style";
import { cardItems } from "@/helpers/cardItems";
import Image from "next/image";
import Link from "next/link";
import cardClasses from "./ProductCard.module.css";

const ProductCard = () => {
  const theme = useTheme();
  const screenBetween = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const CardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "center",
    margin: "4rem 0",
  }));
  return (
    <>
      <CardContainer>
        <Stack sx={screenBetween ? resCardRow : cardRow}>
          {cardItems?.map((cardDetails) => {
            return (
              <>
                <Box
                  key={cardDetails.id}
                  sx={screenBetween ? resCardContainer : cardContainer}
                >
                  <Box sx={cardImageContainer}>
                    <Image
                      src={cardDetails.image}
                      width={200}
                      height={500}
                      alt={cardDetails.button}
                      className={cardClasses.cardImage}
                    />
                    <Link href={cardDetails.link} className={cardClasses.show}>
                      View More
                    </Link>
                  </Box>

                  <Box sx={cardBtnContainer}>
                    <Link
                      href={cardDetails.link}
                      className={cardClasses.cardButton}
                    >
                      {cardDetails.button}
                    </Link>
                  </Box>
                </Box>
              </>
            );
          })}
        </Stack>
      </CardContainer>
    </>
  );
};
export default ProductCard;
