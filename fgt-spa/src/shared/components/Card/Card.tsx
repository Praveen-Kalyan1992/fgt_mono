import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface cardProps {
  title: string;
  description: string;
  imageURL?: string;
  cardSx?: object;
  contentSx?: object;
  titleSx?: object;
  descriptionSx?: object;
  className?: string;
  
}

const MediaCard = ({ title, description, imageURL ,cardSx,
  contentSx,
  titleSx,
  descriptionSx,}: cardProps) => {
  return (
    <Card sx={{ width: "300px", height: "335px",...cardSx  }}>
      <CardMedia sx={{ height: 140 }} image={imageURL} title="green iguana"  />
      <CardContent  sx={contentSx} >
        <Typography variant="body2" sx={descriptionSx}>
          {description}
        </Typography>
         <Typography gutterBottom variant="h5" component="em" sx={titleSx}>
          {title}
        </Typography>
      </CardContent>
       {/* <CardActions>
       <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> 
       <Button size="small">View More</Button> 
      </CardActions>*/}
    </Card>
  );
};
export default MediaCard;
