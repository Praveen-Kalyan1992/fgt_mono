import { gql, useQuery } from "@apollo/client";
import { Box, Paper, Stack, Typography } from "@mui/material";
import MediaCard from "../../../shared/components/Card/Card";
import dotImage from "../../../assets/images/bg-dot.png";
import reptile from "../../../assets/images/contemplative-reptile.jpg";

const OurPartners = () => {
  const ALL_PARTNERS = gql`
    query partners {
      partners {
        designation
        name
        id
      }
    }
  `;

  const { loading, data } = useQuery(ALL_PARTNERS);
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
        fontFamily={`"Pattaya", sans-serif`}
        fontWeight={800}
        fontStyle={"normal"}
        variant="h4"
        component="h2"
      >
        Colloborate With Us
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
        Lets Discover About Our Pride Partners
      </Typography>
    </Box>
  );
};

export default OurPartners;
