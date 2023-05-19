import Image from "next/image";
import Link from "next/link";
import makeStyles, { Button, CardActions } from "@mui/material";
import { Card, CardMedia, CardActionArea, CardContent } from "@mui/material";

const CustomCard = ({ cardsData }) => {
  cardsData.map((card) => {
    return (
      <Card>
        <CardActionArea>
          <CardMedia component="img" height="300" image={card.image} />
          <CardContent>View More</CardContent>
          <CardActions>
            <Button size="small" color="primary">
              CIJ
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    );
  });
};

export default CustomCard;
