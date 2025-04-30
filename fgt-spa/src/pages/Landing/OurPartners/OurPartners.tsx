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
        height: "100%",
        display: "block",
        marginTop: "60px",
      }}
    >
      <Typography align="center" color="#3571dd" fontWeight={600}
        variant="h4"
        component="h2"
      >
       Connect With Us
      </Typography>

      <Typography align="center" color="#141516" fontWeight={300}
        variant="h5"
        component="h1"
      >
        Lets Discover About Our Pride Partners
      </Typography>

      <Paper
        sx={{   
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",   
          justifyContent: "center",
          height: "600px",
          width: "100%",
          marginTop: "60px",
          // background: "#ece5e4",
          // backgroundImage: `url(${dotImage})`,
        }}
        square
      >
        {/* <Stack
          spacing={2}
          direction="row"
          alignContent="center"
          justifyContent="center"
          sx={{ width: "100%", height: "100%", marginTop: "80px" }}
        >
          {!loading &&
            data?.partners?.map((partner: any, index: number) => (
              <MediaCard title={partner.name} imageURL={reptile} description={partner.designation} key={index} />
            ))}
        </Stack> */}
      </Paper>
    </Box>
  );
};

export default OurPartners;
