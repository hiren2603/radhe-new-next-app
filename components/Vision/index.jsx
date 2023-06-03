import { visions } from "@/helpers/VisionMission";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  styled,
  useTheme,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import VisionClass from "./Vision.module.css";

const Vision = () => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: "0 10%" }}>
      {visions.map((card) => (
        <>
          <Grid item key={card.title} xs={12} sm={6} md={6} lg={6}>
            <Card
              sx={{
                dispaly: "flex",
                flexDirection: "column",
                height: { lg: "100%" },
                boxShadow: "10",
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={6} style={{ width: "50%" }} alignSelf={"center"}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={200}
                    height={170}
                  />
                </Grid>
                <Grid item xs={6} style={{ width: "50%" }}>
                  <CardContent style={{ height: "100%" }}>
                    <Typography variant="h5" component={"h2"}>
                      {card.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "1.5rem",
                        textAlign: "justify",
                      }}
                    >
                      {card.info}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </>
      ))}
    </Grid>
  );
};
export default Vision;
