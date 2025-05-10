import { gql, useQuery } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import MediaCard from "../../../shared/components/Card/Card";
import reptile from "../../../assets/images/contemplative-reptile.jpg";

const OurPurpose = () => {
  const ALL_PURPOSES = gql`
    query myPurposes {
  purposes{
    title
    description
    id
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
        align="center"
        color="#3571dd"
        className="cal-sans-regular-400"
        variant="h4"
        component="h2"
      >
        Our Purpose
      </Typography>
      <Typography
        variant="h6"
        noWrap={false}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          fontFamily: `"Pattaya", sans-serif`,
          fontWeight: 800,
          fontStyle: "normal",
          letterSpacing: ".1rem",
          color: "#DE3163",
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
        
        sx={{ width: "100%", height: "100%", marginTop: "80px" ,}}
      >
        {!loading &&
          data?.purposes?.map((purpose: any, index: number) => (
            <MediaCard
              title={purpose.title}
              // imageURL={purpose.imageURL}
              description={purpose.description}
              key={index}
              cardSx={{ backgroundColor: "#fffbe0", boxShadow: 4 , backgroundSize: "cover",
                backgroundPosition: "center",
                height: 250,  // adjust as needed
                display: "flex",
                flexDirection: "column",
             
                justifyContent: "flex-end", // pushes text to bottom
                padding: 2, // space for text
                color: "#fff", // white text on image
                position: "relative",backgroundImage:'url("https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}
              titleSx={{ color: "#3571dd", fontWeight: 600 }}
              descriptionSx={{ fontStyle: "italic" ,color: "#f0f0f0"}}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default OurPurpose;
