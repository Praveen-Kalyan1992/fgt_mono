import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import useBreadcrumbs from "../../utils/hooks/useBreadcrumbs";
import usePageTitle from "../../utils/hooks/usePageTitle";
import { useState } from "react";
import emailjs from "emailjs-com";


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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_USER_ID"
      )
      .then(
        () => {
          setSubmitted(true);
          setError(false);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setError(true);
        }
      );
  };

  return (
    <PageWrapper>
      {breadcrumbs}
      <Box
        sx={{
          bgcolor: "info.main",
          color: "white",
          p: 4,
          borderRadius: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            Contact
          </Typography>
          <Typography gutterBottom>
            Reach out to us via email or follow us on social media.
          </Typography>
          {submitted && <Alert severity="success">Message sent successfully!</Alert>}
          {error && <Alert severity="error">Failed to send message. Please try again.</Alert>}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="secondary">
              Send Message
            </Button>
          </Box>
        </Box>
        <Box sx={{ flex: 1, height: 400, borderRadius: 2, overflow: "hidden" }}>
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019296948158!2d-122.42067998468137!3d37.77851917975857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fd6dbf3554f%3A0x2d02f015f0c64c11!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1619829291832!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </PageWrapper>
  );
};
export default Contact;