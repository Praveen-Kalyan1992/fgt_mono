import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import useBreadcrumbs from "../../utils/hooks/useBreadcrumbs";
import usePageTitle from "../../utils/hooks/usePageTitle";

  const PageWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => (
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
  const breadcrumbs = useBreadcrumbs();
  return (
    <PageWrapper>
      {breadcrumbs}
      <Box sx={{ bgcolor: "primary.main", color: "white", p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Welcome
        </Typography>
        <Typography>
          This is a responsive website built using React, TypeScript, and Material UI.
        </Typography>
      </Box>
    </PageWrapper>
  );
};

export default Landing;