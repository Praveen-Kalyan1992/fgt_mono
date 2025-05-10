import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import FeatureCard from "../FeatureCard/FeatureCard";
import SendIcon from '@mui/icons-material/Send';
// import discussionImage from "../../../assets/images/10.avif";
// import feature1 from "../../../assets/images/contemplative-reptile1.jpg";
// import feature2 from "../../../assets/images/contemplative-reptile2.jpg";
// import feature3 from "../../../assets/images/contemplative-reptile3.jpg";

interface carouselProps {
  data: any;
}

const Carousel = ({ data }: carouselProps) => {
  // setting the state variables
  // cards will be the cards that are displayed
  const [cards, setCards] = useState<React.ReactElement[]>([]);
  // currentPage is the current page of the cards that is currently displayed
  const [currentPage, setCurrentPage] = useState(0);
  // slideDirection is the direction that the cards will slide in
  const [slideDirection, setSlideDirection] = useState<
    "right" | "left" | undefined
  >("left");

  // cardsPerPage is the number of cards that will be displayed per page
  // you can modify for your needs
  const cardsPerPage = 1;

  let listOfCards: React.ReactElement[] = [];
  data?.features.forEach((each: any, i: number) =>
    listOfCards.push(
      <FeatureCard
        title={data?.features[i].name.toString()}
        imageURL={data?.features[i].imageUrl}
        key={i}
      />
    )
  );

  // these two functions handle changing the pages
  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    setCards(listOfCards);
    // eslint-disable-next-line
  }, []);

  const renderDescription = (description: any) => description[0].name;

  return (
    //  outer box that holds the carousel and the buttons
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: "500px",
        width: "100%",
        marginTop: "60px",
      }}
    >
      <IconButton
        onClick={handlePrevPage}
        sx={{ margin: 5 }}
        disabled={currentPage === 0}
      >
        {/* this is the button that will go to the previous page you can change these icons to whatever you wish*/}
        <NavigateBeforeIcon className="fgt-color-stat-white" />
      </IconButton>

      <Box sx={{ width: "100%", height: "100%" }}>
        {/* this is the box that holds the cards and the slide animation,
        in this implementation the card is already constructed but in later versions you will see how the
        items you wish to use will be dynamically created with the map method*/}
        {cards.map((card, index) => (
          <Box
            key={`card-${index}`}
            sx={{
              width: "100%",
              height: "100%",
              display: currentPage === index ? "block" : "none",
            }}
          >
            {/* this is the slide animation that will be used to slide the cards in and out*/}
            <Slide direction={slideDirection} in={currentPage === index}>
              <Stack
                spacing={2}
                direction="row"
                alignContent="center"
                justifyContent="center"
                sx={{ width: "100%", height: "100%" }}
              >
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    height: "500px",
                    width: "100%",
                    margin: "10px",
                    background: "#FAFAFA",
                    boxShadow: "none",
                    border: "2px solid rgb(162 199 255)",
                    borderRadius: "20px",
                  }}
                  square
                >
                  <Grid container spacing={1}>
                    <Grid size={{ xs: 8, md: 8 }}>
                      <Box
                        sx={{
                          display: "block",
                          width: "100%",
                          marginTop: "60px",
                        }}
                      >
                        <Typography
                          sx={{ padding: "20px" }}
                          align="center"
                          className="cal-sans-regular"
                          variant="h4"
                          component="h2"
                          color="#006cbb"
                        >
                          {data?.features[index].name}
                        </Typography>
                        <Typography
                          sx={{ padding: "20px" }}
                          align="center"
                          className="cal-sans-regular-400 fgt-color-stat"
                          fontWeight={400}
                          fontStyle={"normal"}
                          variant="h4"
                          component="h2"
                        >
                          {data?.features[index].description}
                        </Typography>
                        {/* <Typography
                          sx={{ padding: "20px" }}
                          align="center"
                          color="red"
                          fontFamily={`"Pattaya", sans-serif`}
                          fontWeight={400}
                          fontStyle={"normal"}
                          variant="h4"
                          component="h2"
                        >
                          {renderDescription(
                            data?.features[index]?.supportingDescription
                          )}
                        </Typography> */}
                        <Box className="fgt-color-stat" sx={{ padding: "20px"}} textAlign="center">
                          {/* <Button variant="outlined">Get Quotes Here</Button> */}
                           <Button variant="outlined" endIcon={<SendIcon />}>Get Quotes Here</Button>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 4, md: 4 }}>{card}</Grid>
                  </Grid>
                </Paper>
              </Stack>
            </Slide>
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={handleNextPage}
        sx={{
          margin: 5,
        }}
        disabled={
          currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1
        }
      >
        <NavigateNextIcon className="fgt-color-stat-white" />
      </IconButton>
    </Box>
  );
};

export default Carousel;
