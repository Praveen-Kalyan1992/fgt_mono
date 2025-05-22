import { gql, useQuery } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import MediaCard from "../../../shared/components/Card/Card";
import reptile from "../../../assets/images/contemplative-reptile.jpg";
import { Brightness1 } from "@mui/icons-material";
import { transform } from "typescript";

const OurPurpose = () => {
  const ALL_PURPOSES = gql`
    query myPurposes {
  purposes{
    title
    description
    id
    imageUrl
  }
  }

  `;

  const { loading, data } = useQuery(ALL_PURPOSES);
  return (
    <Box
      sx={{
        width: "100%",
        height: "600px",
        display: "block",
        marginTop: "60px",
      }}
    >
     <Typography
        className="cal-sans-regular-600"
        align="center"
        color= "#006cbb"
        variant="h4"
        component="h2"
      >
        Our Purpose
      </Typography>
     <Typography
       className="fgt-color-stat-white"
        variant="h6"
        noWrap={false}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          letterSpacing: ".1rem",
          // color: "#DE3163",
          marginTop: "30px",
        }}
      >
        Lets Discover About Our Purpose
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        alignContent="center"
        justifyContent="center"
        
        sx={{ width: "100%", height: "100%", marginTop: "80px" ,"&:hover .hover-card:not(:hover)": {
      opacity: 0.3,
    },}}
      >
       {!loading &&
    data?.purposes?.map((purpose: any, index: number) => (
      <MediaCard
        title={purpose.title}
        description={purpose.description}
        key={index}
        className="hover-card"
        cardSx={{
          backgroundColor: "#fffbe0",
          boxShadow: 4,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 4,
          color: "#fff",
          position: "relative",
          // backgroundImage: 'url("https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundImage: `url(${purpose.imageUrl?.trim() || "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=2070"})`,
          transition: "0.5s ease",
          cursor: "pointer",
          "&:hover": {
            // transform: "scale(1.1)",
            filter:"Brightness(0.6)",
            transform:"translateZ(120px) rotate(360deg) scale(1.1)",
          },
        }}
        titleSx={{ color: "#f0f0f0", fontWeight: 600 }}
        descriptionSx={{ fontStyle: "italic", color: "#f0f0f0" }}
      />
    ))}
</Stack>
    </Box>
  );
};

export default OurPurpose;
