import { Box, Grid, Typography, Stack, Button } from "@mui/material";
import Heading from "@/components/Heading";
const CO2 = () => {
  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          alignSelf: "center",
          justifyContent: "center",
          width: "100%",
          margin: "4rem 0",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            textTransform: "uppercase",
            color: "#000000",
            textShadow: "2px 2px 2px #c0c0c0",
            alignSelf: "center",
          }}
        >
          CO2 Laser Marking System
        </Typography>
        <Stack direction="column">
          <Heading name="PETMARK" type="Flying Laser" />
        </Stack>
      </Stack>
    </>
  );
};

export default CO2;
