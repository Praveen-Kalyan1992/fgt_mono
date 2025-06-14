import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { serviceCards } from "../Banner/Banner";

const ValuePropositionSection = () => (
  <Box
    sx={{
      top: "80px",
      position: "relative",
      width: "100%",
      height: "982px",
      bgcolor: "background.paper",
    }}
  >
    <Box
      sx={{
        position: "relative",
        height: "982px",
        background:
          "linear-gradient(270deg, rgba(255,255,255,1) 27%, rgba(129,139,244,1) 76%)",
      }}
    >
      {/* Why Us Section */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "682px",
          top: "300px",
          left: 0,
          borderRadius: "0 280px 0 280px",
          backgroundImage: "url(/vivid-blurred-colorful-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <Box sx={{ position: "relative", height: "682px" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "682px",
              gap: 8,
              pt: 60,
              pb: 8,
              px: 60,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <Box sx={{ position: "relative", width: "510px" }}>
              <Box
                component="img"
                sx={{
                  position: "absolute",
                  width: "510px",
                  height: "374px",
                  top: "18px",
                  left: 0,
                  objectFit: "cover",
                }}
                alt="Middle aged hispanic"
                src="./middle-aged-hispanic-business-people-1.png"
              />
            </Box>
            <Box sx={{ position: "relative", flexGrow: 1, p: 4 }}>
              <Typography
                variant="body2"
                sx={{
                  position: "relative",
                  height: "357px",
                  color: "white",
                }}
              >
                At FGT, we turn ideas into powerful digital experiences —
                powered by the perfect blend of experienced hands and
                young creative minds. From web and mobile apps to custom
                software, we build smart solutions that help your business
                grow and connect with the world. Anyone can write code —
                but it takes true expertise to build solutions that are
                reliable, future-ready, and aligned with your real
                business goals
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "1032px",
              position: "absolute",
              top: "150px",
              left: "240px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "white",
                fontSize: "3rem",
                letterSpacing: "0.96px",
                lineHeight: "2rem",
                whiteSpace: "nowrap",
              }}
            >
              WHY US
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Services Cards Section */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "300px",
          top: 0,
          left: 0,
          bgcolor: "background.paper",
          borderRadius: "0 0 0 280px",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: "31px",
            left: "201px",
            fontFamily: "Roboto, Helvetica",
            fontWeight: 500,
            fontSize: "57px",
            textAlign: "center",
            letterSpacing: "-0.25px",
            lineHeight: "64px",
            whiteSpace: "nowrap",
          }}
        >
          You bring the vision. We help you go further.
        </Typography>
        <Grid
          container
          spacing={8}
          sx={{
            width: "1202px",
            height: "280px",
            position: "absolute",
            top: "128px",
            left: "127px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {serviceCards.map((card, index) => (
            <Grid key={index} size={{ xs: 3, md: 4 }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  p: 4,
                  height: "100%",
                  borderRadius: "32px",
                  background:
                    "linear-gradient(180deg, rgba(249,249,249,1) 0%, rgba(212,212,212,1) 50%, rgba(255,255,255,1) 100%)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100px",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2.5,
                    width: "100%",
                  }}
                >
                  {index === 0 ? (
                    <Box
                      sx={{
                        position: "absolute",
                        width: "80px",
                        height: "80px",
                        top: "10px",
                        left: "66px",
                        bgcolor: "white",
                        borderRadius: "100px",
                        border: "1px solid #ff6666",
                      }}
                    />
                  ) : null}
                  {card.icon}
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    flexGrow: 1,
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: index === 0 ? "#202e52" : "black",
                      fontSize: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  </Box>
);

export default ValuePropositionSection;