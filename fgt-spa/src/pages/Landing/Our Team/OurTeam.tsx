import { gql, useQuery } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import MediaCard from "../../../shared/components/Card/Card";
import reptile from "../../../assets/images/contemplative-reptile.jpg";

const OurTeam = () => {
  const ALL_MEMBERS = gql`
    query teams {
      teams {
        name
        designation
        id
        skillSet {
          id
          name
        }
      }
    }
  `;

  const { loading, data } = useQuery(ALL_MEMBERS);
  return (
    <Box
      sx={{
        display: "block",
        height: "600px",
        width: "100%",
        marginTop: "60px",
      }}
    >
      <Typography
        align="center"
        color="#3571dd"
        fontWeight={600}
        variant="h5"
        component="h2"
      >
        The FGT Team
      </Typography>

      <Typography
        align="center"
        color="#141516"
        fontWeight={300}
        variant="h4"
        component="h1"
      >
        Together, we craft the software that shapes your future
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        alignContent="center"
        justifyContent="center"
        sx={{ width: "100%", height: "100%", marginTop: "80px" }}
      >
        {!loading &&
          data?.teams?.map((member: any, index: number) => (
            <MediaCard
              title={member.name}
              imageURL={reptile}
              description={member.designation}
              key={index}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default OurTeam;
