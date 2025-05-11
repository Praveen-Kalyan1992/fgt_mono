import React, { useState, ChangeEvent } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Paper, 
  TextField, 
  Button, 
  Typography 
} from '@mui/material';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  // Initialize form data state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Update state on input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (e.g., send data to API)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Reset form or show a success message after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
      {/* Hero Section with AI-Generated Image */}
      <Paper
        elevation={3}
        sx={{
          backgroundImage: 'url("https://via.placeholder.com/1200x400?text=AI+Generated+Hero+Image")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 400,
          marginBottom: '2rem'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant="h2" component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
            Contact Us
          </Typography>
        </Box>
      </Paper>

      <Grid container spacing={4}>
        {/* Contact Form Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
              Get in Touch
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                margin="normal"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Office Information Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Our Office
            </Typography>
            <Typography variant="body1" gutterBottom>
              123, Main Street,
              <br />
              Tambaram, Tamil Nadu, India
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: +91-12345-67890
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: info@example.com
            </Typography>
            {/* Additional AI Generated Office Image */}
            <Box
              component="img"
              src="https://via.placeholder.com/500x300?text=AI+Generated+Office+Image"
              alt="AI Generated Office"
              sx={{ marginTop: 2, width: '100%', borderRadius: 2 }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
