import { motion } from "framer-motion";
import useBreadcrumbs from "../../utils/hooks/useBreadcrumbs";
import usePageTitle from "../../utils/hooks/usePageTitle";
import { Box, Typography } from "@mui/material";

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

const About = () => {
  usePageTitle();
  const breadcrumbs = useBreadcrumbs();

  return (
    <PageWrapper>
      {breadcrumbs}
      <Box
        sx={{
          bgcolor: "secondary.main",
          color: "white",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography>
          We build beautiful and responsive UIs with React and Material UI.
        </Typography>
      </Box>
    </PageWrapper>
  );
};
export default About;
