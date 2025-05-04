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
        fontWeight={600}
        variant="h4"
        component="h2"
      >
        Connect With Us
      </Typography>

      <Typography
        align="center"
        color="#141516"
        fontWeight={300}
        variant="h5"
        component="h1"
      >
        Lets Discover About Our Pride Partners
      </Typography>
    </Box>
  );
};

export default OurPartners;
