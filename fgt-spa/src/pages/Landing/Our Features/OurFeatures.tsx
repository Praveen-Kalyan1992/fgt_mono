import { gql, useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import Carousel from "../../../shared/components/Carousel/Carousel";


const OurFeatures = () => {
  const ALL_FEATURES = gql`
    query feature {
      features {
        supportingDescription {
          name
        }
        name
        id
        description
        imageUrl
      }
    }
  `;

  const { loading, data } = useQuery(ALL_FEATURES);
  return (
    <Box
      sx={{
        width: "100%",
        height: "800px",
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
        Why Partnering With Us
      </Typography>

      {/* <Typography
        align="center"
        color="#141516"
        fontWeight={300}
        variant="h6"
        component="h1"
      >
        At FGT, <br></br>
        <p>
          We understand that technology is ever-evolving, and to stay ahead,
          flexibility is key. By adopting agile methodologies, we ensure that we
          can quickly adapt to changes and deliver solutions that grow with your
          business
        </p>
        <br></br>Whether you're developing a mobile app, a web application, or
        custom software, we’re with you every step of the way. Our end-to-end
        service covers everything, from initial planning and design to
        development and ongoing post-launch support — ensuring that your
        solution is not only scalable but also future-ready."
      </Typography> */}

      {/* <Typography
        align="center"
        color="#3571dd"
        fontWeight={100}
        variant="h6"
        component="h2"
      >
        We don’t just deliver and disappear; we build lasting partnerships that
        grow with you
      </Typography> */}
      {!loading && data.features.length > 0 && <Carousel data={data} />}
    </Box>
  );
};

export default OurFeatures;
