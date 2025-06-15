// import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { Box, Typography } from "@mui/material";
import usePageTitle from "../../../utils/hooks/usePageTitle";
import useBreadcrumbs from "../../../utils/hooks/useBreadcrumbs";

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

const Portfolio = () => {
  usePageTitle();
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      {breadcrumbs}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          overflowX: "hidden",
        }}
      >
        <PageWrapper>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", margin: "20px 0" }}
          >
           Portfolio
          </Typography>
        </PageWrapper>
      </Box>
    </>
  );
};

export default Portfolio;
