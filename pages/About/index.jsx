import React from "react";
import {
  Stack,
  Typography,
  Box,
  Grid,
  useTheme,
  CssBaseline,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import Vision from "@/components/Vision";
import certificate from "../../public/assets/certificate.png";
import mi from "../../public/assets/makeinindia.png";
import Image from "next/image";
import {
  aboutContent,
  productContainer,
  titleContainer,
  pageTitle,
} from "./style";

const About = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container>
        <Grid
          container
          item
          width={"90vw"}
          alignItems={"center"}
          justifyContent="center"
          justifySelf={"center"}
        >
          <Grid item sx={titleContainer} alignSelf="flex-start">
            <Typography sx={pageTitle}>About Us</Typography>
          </Grid>

          <Grid
            container
            // item
            alignItems="center"
            justifyContent={"space-evenly"}
            sx={{ mt: 2 }}
            lg={12}
          >
            <Grid item lg={3}>
              <Image
                src={certificate}
                alt="certificate"
                height={550}
                width={350}
                style={{
                  justifySelf: "center",
                  boxShadow: "2px 2px 2px 10px #2F377A",
                }}
              />
              <Image
                src={mi}
                alt="Make In India"
                height={100}
                width={190}
                style={{ paddingTop: "2rem" }}
              />
            </Grid>

            <Grid item lg={5}>
              <Typography sx={aboutContent}>
                Our story began in 2011. Back then we were roadster and service
                provider of Continuous ink jet printer with a single area of the
                market. Now we are manufacturer of CIJ Printer,Laser Machine and
                TIJ Printer.
              </Typography>
              <Typography sx={aboutContent}>
                Today, we are privileged to connect with hundreds of customers
                everyday with exceptional products and more than 5 branches.
                Today Radhe Enterprise is fastest growing company engaged in
                providing total service & consumable supports to all users of
                inkjet printers like{" "}
                <b> Markem Image, Domino, Hitachi, Videojet & Willett. </b> We
                are having head office at Rajkot(Gujarat) and branch offices in{" "}
                <b> Ahmedabad, Surat, Morbi, Gandhidham, Vapi. </b>Recently we
                have started our own manufacturing of “RE-Jet” CIJ Printer,
                Laser Machine, and TIJ Printer Machine.
              </Typography>
              <Typography sx={aboutContent}>
                We have always believed in serving the best product possible.
                It’s our goal for all of our products to be grown under the
                highest standards of quality, using ethical sourcing practices.
              </Typography>
              <Typography sx={aboutContent}>
                The quality of our consumable and service conforms strictly to
                the highest global standards and this is borne out by the
                ever-increasing satisfied customer base. We also provide
                original spares. We are also selling new inkjet printer machine,
                laser marking machine, TIJ printer and TTO printer for the
                increasing demand in this batch coding industry.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} alignItems="center" justifyContent="center">
            <Typography
              variant="h4"
              align="center"
              sx={{
                textShadow: "2px 2px 2px #9c9c9c",
                color: "#000000",
                mb: "2rem",
              }}
            >
              Vision & Mission
            </Typography>
          </Grid>
          <Vision />
        </Grid>
      </Grid>
    </>
  );
};
export default About;
