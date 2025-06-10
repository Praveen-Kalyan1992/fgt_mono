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

const Contact = () => {
  usePageTitle();
  const breadcrumbs = useBreadcrumbs();
  return (
    <PageWrapper>
      {breadcrumbs}
      <Box sx={{ bgcolor: "info.main", color: "white", p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>
        <Typography>
          Reach out to us via email or follow us on social media.
        </Typography>
      </Box>
    </PageWrapper>
  );
};
export default Contact;