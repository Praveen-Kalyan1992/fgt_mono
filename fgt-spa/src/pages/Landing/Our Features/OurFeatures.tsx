import { gql, useQuery } from "@apollo/client";
import { Box, Paper, Stack, Typography } from "@mui/material";
import MediaCard from "../../../shared/components/Card/Card";
import dotImage from "../../../assets/images/bg-dot.png";
import reptile from "../../../assets/images/contemplative-reptile.jpg";
import Carousel from "../../../shared/components/Carousel/Carousel";

const OurFeatures = () => {
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
        Why Partner With Us
      </Typography>

      <Typography align="center" color="#141516" fontWeight={300}
        variant="h6"
        component="h1"
      >
        At FGT, <br></br><p>We understand that technology is ever-evolving, and to stay ahead, flexibility is key. By adopting agile methodologies,
          we ensure that we can quickly adapt to changes and deliver solutions that grow with your business</p><br></br>Whether you're developing a mobile app,
        a web application, or custom software, we’re with you every step of the way. Our end-to-end service covers everything,
        from initial planning and design to development and ongoing post-launch support — ensuring that your solution is not only scalable but also future-ready."      </Typography>

      <Typography align="center" color="#3571dd" fontWeight={100}
        variant="h6"
        component="h2"

      >
        We don’t just deliver and disappear; we build lasting partnerships that grow with you

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
        <Carousel />
      </Paper>
    </Box>
  );
};

export default OurFeatures;
