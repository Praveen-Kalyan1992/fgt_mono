import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Icon from "@mui/material/Icon";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "secondary",
}));

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-center text-white dark:bg-neutral-900">
      <Box
        sx={{
          width: "100%",
          height: "400px",
        }}
      >
        <Grid container spacing={1}>
          <Grid size={{ xs: 6, md: 4 }}>
            <Box
              sx={{
                display: "block",
                width: "100%",
                marginTop: "60px",
              }}
            >
              <Typography
                align="center"
                color="#3571dd"
                fontFamily={`"Pattaya", sans-serif`}
                fontWeight={400}
                fontStyle={"normal"}
                variant="h4"
                component="h2"
              >
                Our Services
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Box
              sx={{
                marginTop: "60px",
                display: "block",
                width: "100%",
              }}
            >
               <Typography
                align="center"
                color="#3571dd"
                fontFamily={`"Pattaya", sans-serif`}
                fontWeight={400}
                fontStyle={"normal"}
                variant="h4"
                component="h2"
              >
                Know more
              </Typography>
            </Box>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 3,
                },
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <InstagramIcon color="primary">add_circle</InstagramIcon>
              <FacebookIcon color="primary">add_circle</FacebookIcon>
              <XIcon color="primary">add_circle</XIcon>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Box
              sx={{
                display: "block",
                width: "100%",
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
                Company
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* <!--Copyright section--> */}
        {/* <div className="bg-neutral-900 p-4 text-right text-neutral-400 dark:bg-neutral-700 dark:text-neutral-200"> */}
        <Box
          className="bg-neutral-900 p-4 text-right text-neutral-400 dark:bg-neutral-700 dark:text-neutral-200"
          sx={{
            width: "100%",
            marginTop: "227px",
          }}
        >
          © 2025 Copyright:
          <a className="text-neutral-400 dark:text-neutral-400" href="#">
            {" "}
            FGT
          </a>
        </Box>
        {/* </div> */}
      </Box>
    </footer>
    // </Paper>
  );
};

export default Footer;
