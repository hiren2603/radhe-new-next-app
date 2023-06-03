import Image from "next/image";
import {
  Typography,
  Button,
  Box,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import certificate from "../../public/assets/certificate.png";

const Info = () => {
  const theme = useTheme();
  const smMaxWidth = useMediaQuery("(max-width : 550px)");
  const minWidth = useMediaQuery("(min-width : 551px)");
  const maxWidth = useMediaQuery("(max-width : 768px)");
  const sMinWidth = useMediaQuery("(min-width : 769px)");
  const sMaxWidth = useMediaQuery("(max-width : 1024px)");

  const infoContainer = {
    width: "90vw",
    justifySelf: "center",
    justifyContent: "center",
    display: "grid",
    gridTemplateColumns: "4rem 3fr 3fr 4rem",
    alignItems: "center",
    padding: "2rem 0",
    ...(smMaxWidth && { width: "90vw" }),
    ...(minWidth && maxWidth && { width: "90vw" }),
    ...(sMinWidth &&
      sMaxWidth && {
        padding: "2rem 0",
        width: "90vw",
      }),
  };

  const titleContainer = {
    margin: "1rem 0",
    gridColumn: "2/4",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ...(smMaxWidth && {
      gridRow: "1/2",
      gridColumn: "2/4",
      justifySelf: "center",
    }),
    ...(minWidth && maxWidth && { gridColumn: "2/4" }),
  };

  const infoTitle = {
    color: "#000000",
    fontWeight: 500,
    textShadow: "2px 2px 2px #5b5b5b70",
    fontSize: "36px",
  };

  const infoImgContainer = {
    gridColumn: "2/3",
    display: "grid",
    justifySelf: "flex-start",
    alignItems: "center",
    ...(smMaxWidth && {
      marginTop: "2rem",
      gridRow: "3/4",
      gridColumn: "2/4",
      justifySelf: "center",
    }),
    ...(minWidth &&
      maxWidth && {
        gridColumn: "2/4",
        gridRow: "3/4",
        margin: "2rem 0",
        display: "grid",
        justifySelf: "center",
      }),
    ...(sMinWidth &&
      sMaxWidth && {
        gridColumn: " 2/4",
        gridRow: "3/4",
        display: "grid",
        justifySelf: "center",
        alignItems: "flex-start",
      }),
  };

  const certImg = {
    maxHeight: "500px",
    boxShadow: "2px 2px 2px 10px #2f377a",
    ...(smMaxWidth && {
      width: "300px",
      height: "400px",
      justifySelf: "center",
    }),
    ...(minWidth &&
      maxWidth && {
        justifySelf: "center",
        gridColumn: "2/4",
        height: "100%",
      }),
    ...(sMinWidth && sMaxWidth && { height: "100%", width: "100%" }),
  };

  const infoContentContainer = {
    gridColumn: "3/4",
    alignItems: "center",
    justifyContent: "center",
    ...(smMaxWidth && {
      gridRow: "2/3",
      gridColumn: "1/5",
      justifyContent: "center",
      marginBottom: "2rem",
    }),
    ...(minWidth &&
      maxWidth && {
        gridColumn: "2/4",
        justifyContent: "center",
        marginBottom: "2rem",
      }),
    ...(sMinWidth &&
      sMaxWidth && {
        gridColumn: "2/4",
      }),
  };

  const infoContent = {
    textAlign: "justify",
    fontSize: "18px",
    lineHeight: 2,
    padding: "0.5rem 0",
    color: "#000000",
  };

  const bold = {
    fontWeight: 500,
    color: "#f31f25",
  };

  const infoButtonContainer = {
    ...(smMaxWidth && { justifySelf: "center", textAlign: "center" }),
    ...(minWidth &&
      maxWidth && {
        justifySelf: "center",
        textAlign: "center",
      }),
  };

  return (
    <>
      <Box sx={infoContainer}>
        <Box sx={titleContainer}>
          <Typography variant="h4" sx={infoTitle}>
            About Us
          </Typography>
          <Divider />
        </Box>

        <Box sx={infoImgContainer}>
          <Image
            src={certificate}
            height={550}
            width={350}
            alt="certificate"
            style={certImg}
          />
        </Box>

        <Box sx={infoContentContainer}>
          <Typography sx={infoContent}>
            Our story began in 2011. Back then we were roadster and service
            provider of Continuous ink jet printer with a single area of the
            market. Now we are manufacturer of CIJ Printer,Laser Machine and TIJ
            Printer.
          </Typography>

          <Typography sx={infoContent}>
            {" "}
            Today, we are privileged to connect with hundreds of customers
            everyday with exceptional products and more than 5 branches. Today
            Radhe Enterprise is fastest growing company engaged in providing
            total service & consumable supports to all users of inkjet printers
            like{" "}
            <b style={bold}>
              {" "}
              Markem Image, Domino, Hitachi, Videojet & Willett.{" "}
            </b>{" "}
            We are having head office at Rajkot(Gujarat) and branch offices in{" "}
            <b style={bold}> Ahmedabad, Surat, Morbi, Gandhidham, Vapi. </b>
            Recently we have started our own manufacturing of “RE-Jet” CIJ
            Printer, Laser Machine, and TIJ Printer Machine.
          </Typography>

          <Typography sx={infoContent}>
            {" "}
            We have always believed in serving the best product possible. It’s
            our goal for all of our products to be grown under the highest
            standards of quality, using ethical sourcing practices.
          </Typography>

          <Box>
            <Button variant="contained" color="error">
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Info;
