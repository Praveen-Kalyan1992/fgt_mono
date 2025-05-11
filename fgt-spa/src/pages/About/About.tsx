import React from 'react';
import { Container, Paper, Grid, Box, Typography } from '@mui/material';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    position: 'CEO',
    image: 'https://via.placeholder.com/300x300?text=AI+Generated+Image'
  },
  {
    name: 'Bob Smith',
    position: 'CTO',
    image: 'https://via.placeholder.com/300x300?text=AI+Generated+Image'
  },
  {
    name: 'Cara Davis',
    position: 'Lead Designer',
    image: 'https://via.placeholder.com/300x300?text=AI+Generated+Image'
  },
];

const About: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '2rem 0' }}>
      {/* Hero Section with AI Generated Image */}
      <Paper
        elevation={3}
        sx={{
          backgroundImage: 'url("https://via.placeholder.com/1200x400?text=AI+Generated+About+Us+Hero+Image")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 400,
          marginBottom: '2rem'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography 
            variant="h2" 
            component="div" 
            sx={{ color: 'white', fontWeight: 'bold' }}
          >
            About Us
          </Typography>
        </Box>
      </Paper>

      {/* Our Story Section */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          We are a passionate team dedicated to delivering exceptional products and services. 
          Our journey began with a vision to revolutionize the digital landscape, and over time, 
          we have consistently pushed the boundaries of innovation.
        </Typography>
        <Typography variant="body1">
          By blending creativity with technology, we deliver experiences that inspire and engage 
          our clients. Our commitment to excellence drives us to constantly evolve and excel.
        </Typography>
      </Paper>

      {/* Our Team Section */}
      <Typography variant="h4" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Box
                component="img"
                src={member.image}
                alt={`${member.name}'s Photo`}
                sx={{ width: '100%', borderRadius: '50%', marginBottom: 2 }}
              />
              <Typography variant="h6">
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {member.position}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
