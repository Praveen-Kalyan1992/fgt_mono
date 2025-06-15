// import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
// import useBreadcrumbs from "../../utils/hooks/useBreadcrumbs";
import usePageTitle from "../../utils/hooks/usePageTitle";
import Layout from "./Layout/Layout";
import Header from "./Header/Header";
import { Box } from "@mui/material";
// import Footer from "../Footer/Footer";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const Landing = () => {
  usePageTitle();
  // const breadcrumbs = useBreadcrumbs();
  return (
     <Box sx={{ maxWidth: "100%", overflowX: "hidden", border: "3px solid red", }}>
      <PageWrapper>
        <Header />
        {/* {breadcrumbs} */}
        <Layout />
      </PageWrapper>
    </Box>
  );
};

export default Landing;
