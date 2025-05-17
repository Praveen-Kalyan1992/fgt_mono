import { Box, Grid, Link, Paper, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import Icon from "@mui/material/Icon";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: "secondary",
// }));

// const Footer = () => {
//   return (
//     <footer className="background-10 text-center text-white dark:bg-neutral-900">
//       <Box
//         sx={{
//           width: "100%",
//           height: "400px",
//         }}
//       >
//         <Grid container spacing={1}>
//           <Grid size={{ xs: 6, md: 4 }}>
//             <Box
//               sx={{
//                 display: "block",
//                 width: "100%",
//                 marginTop: "60px",
//               }}
//             >
//               <Typography
//                 align="center"
//                 className="cal-sans-regular-400 fgt-fore-white"
//                 variant="h4"
//                 component="h2"
//               >
//                 Our Services
//               </Typography>
//             </Box>
//               <Box
//               sx={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 alignContent: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Link href="#">Web Development</Link>
//               <Link href="#">Mobile App Devlopment</Link>
//               <Link href="#">ECommerce Solution</Link>
//             </Box>
//           </Grid>
//           <Grid size={{ xs: 6, md: 4 }}>
//             <Box
//               sx={{
//                 marginTop: "60px",
//                 display: "block",
//                 width: "100%",
//               }}
//             >
//               <Typography
//                 align="center"
//                 className="cal-sans-regular-400 fgt-fore-whitet"
//                 variant="h4"
//                 component="h2"
//               >
//                 Know more
//               </Typography>
//             </Box>
//             <Box
//               sx={{
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 alignContent: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Link href="#">About</Link>
//               <Link href="#">Contact</Link>
//             </Box>
//             {/* <Box
//               sx={{
//                 "& > :not(style)": {
//                   m: 3,
//                 },
//                 width: "100%",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 alignContent: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <a href="https://www.instagram.com/fgtech.1507">
//                 <InstagramIcon color="primary">add_circle</InstagramIcon>
//               </a>
//               <a href="https://www.facebook.com">
//                 <FacebookIcon color="primary">add_circle</FacebookIcon>
//               </a>
//               <a href="https://www.linkedin.com">
//                 <LinkedInIcon color="primary">add_circle</LinkedInIcon>
//               </a>
//             </Box> */}
//           </Grid>
//           <Grid size={{ xs: 6, md: 4 }}>
//             <Box
//               sx={{
//                 display: "block",
//                 width: "100%",
//                 marginTop: "60px",
//               }}
//             >
//               <Typography
//                 align="center"
//                 className="cal-sans-regular-400 fgt-fore-white"
//                 variant="h4"
//                 component="h2"
//               >
//                 Company
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* <!--Copyright section--> */}
//         {/* <div className="bg-neutral-900 p-4 text-right text-neutral-400 dark:bg-neutral-700 dark:text-neutral-200"> */}

//         <Box
//           className="background-10 p-4 text-right dark:bg-neutral-700 dark:text-neutral-200"
//           sx={{
//             width: "100%",
//             marginTop: "227px",
//           }}
//         >
//           © 2025 Copyright:
//           <a className="" href="#">
//             {" "}
//             FGT
//           </a>
//         </Box>
//         {/* </div> */}
//       </Box>
//     </footer>
//     // </Paper>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <Box
      className="background-10"
      sx={{
        width: "100%",
        // backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
        padding: "16px",
        // position: "fixed",
        bottom: 0,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid>
          <Link href="/" color="inherit" underline="none">
            Home
          </Link>
        </Grid>
        <Grid>
          <Link href="/about" color="inherit" underline="none">
            About
          </Link>
        </Grid>
        <Grid>
          <Link href="/services" color="inherit" underline="none">
            Services
          </Link>
        </Grid>
        <Grid>
          <Link href="/contact" color="inherit" underline="none">
            Contact
          </Link>
        </Grid>
      </Grid>
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
        <a href="https://www.instagram.com/fgtech.1507">
          <InstagramIcon color="inherit">add_circle</InstagramIcon>
        </a>
        <a href="https://www.facebook.com">
          <FacebookIcon color="inherit">add_circle</FacebookIcon>
        </a>
        <a href="https://www.linkedin.com">
          <LinkedInIcon color="inherit">add_circle</LinkedInIcon>
        </a>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        © 2025 FGT. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
