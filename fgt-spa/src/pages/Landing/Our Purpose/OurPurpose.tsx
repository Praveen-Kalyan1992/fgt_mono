import { gql, useQuery } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import MediaCard from "../../../shared/components/Card/Card";
import reptile from "../../../assets/images/contemplative-reptile.jpg";

const OurPurpose = () => {
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
        sx={{ width: "100%", height: "100%", marginTop: "80px" }}
      >
        {!loading &&
          data?.partners?.map((partner: any, index: number) => (
            <MediaCard
              title={partner.name}
              imageURL={reptile}
              description={partner.designation}
              key={index}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default OurPurpose;
