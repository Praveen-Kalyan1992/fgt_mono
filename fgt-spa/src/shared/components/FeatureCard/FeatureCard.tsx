import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface cardProps {
  title?: string;
  description?: string;
  imageURL?: string;
}

const FeatureCard = ({ title, description, imageURL }: cardProps) => {
  return (
    <Card  sx={{
      width: "400px",
      height: "400px",
      borderRadius: "200px",
      backgroundImage: `url(${imageURL})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",   // vertically center
      alignItems: "center",  
      color: " #3e3c3c",
      padding: 5,
      boxShadow: 2,
    }}>
      {/* <CardMedia sx={{ height: 140 }} image={imageURL} title="green iguana" /> */}
      <CardContent sx={{ backgroundColor: "transparent", // removes the box background
    textAlign: "center",
    width: "90%",
    padding: "16px",
    mb: 2,}}>
        <Typography gutterBottom variant="h5" fontFamily="cursive" fontWeight="bold" color="#ffccbc" component="div">
          {title}
        </Typography>
        <Typography variant="body2" >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default FeatureCard;
