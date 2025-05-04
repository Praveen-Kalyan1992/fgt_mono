import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface cardProps {
  title?: string;
  description?: string;
  imageURL?: string;
}

const FeatureCard = ({ title, description, imageURL }: cardProps) => {
  return (
    <Card sx={{ width: "300px", height: "335px" }}>
      <CardMedia sx={{ height: 140 }} image={imageURL} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View More</Button>
      </CardActions>
    </Card>
  );
};
export default FeatureCard;
