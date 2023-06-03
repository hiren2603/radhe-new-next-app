// import broucher from "../../public/broucher.pdf";
import { Grid, Typography, Button, Stack } from "@mui/material";

const Heading = ({ name, type }) => {
  return (
    <>
      <Stack
        direction={{ lg: "row", md: "row", sm: "column" }}
        justifyContent={"space-between"}
        sx={{
          margin: "3% 90px",
          borderBottom: "1px solid black",
          pb: "0.7rem",
          alignItems: { xs: "center" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "30px",
            fontWeight: "600",
            textTransform: "uppercase",
            color: "#000000",
            textShadow: "2px 2px 2px #0000004f",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "30px",
              fontWeight: "600",
              textTransform: "uppercase",
              color: "#E21D25",
              mr: "10px",
            }}
          >
            {name}
          </Typography>
          {type}
        </Typography>

        <Button
          size="large"
          variant="contained"
          sx={{
            height: "50px",
            width: "20%",
            fontSize: "18px",
          }}
        >
          Download
        </Button>
      </Stack>
      {/* <Grid
        container
        direction={"row"}
        sx={{
          borderBottom: "1px solid #000000",
          pb: "0.5rem",
          alignItems: "center",
        }}
        gridColumn={"2/4"}
        gridRow={"1/2"}
        gridTemplateColumns={"1fr 1fr"}
      >
        <Grid item lg={8}>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: "30px",
              fontWeight: "600",
              textTransform: "uppercase",
              color: "#000000",
              textShadow: "2px 2px 2px #0000004f",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                textTransform: "uppercase",
                color: "#E21D25",
                mr: "10px",
              }}
            >
              {name}
            </Typography>
            {type}
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Button variant="contained" sx={{ width: "50%", height: "50px" }}>
            Download Broucher
          </Button>
        </Grid>
      </Grid> */}
    </>
  );
};
export default Heading;
