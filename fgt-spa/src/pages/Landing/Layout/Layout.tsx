import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../HeroSection/HeroSection";
import ValueProposition from "../ValueProposition/ValueProposition";
import OurServices from "../OurServices/OurServices";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

// Mock data for service cards
export const serviceCards = [
  {
    title: "Client-Centric",
    description:
      "We maintain constant communication and make sure your voice remains central throughout the process.",
    icon: <HeroSection.ServiceIcon />,
  },
  {
    title: "Agile-Driven",
    description:
      "We follow Agile methodology to adapt, iterate, and deliver fast — keeping you in the loop, every step of the way.",
    icon: <HeroSection.PlaceholderIcon />,
  },
  {
    title: "Cost-Effective",
    description:
      "Our development process is lean and focused, eliminating unnecessary expenses while maintaining top-tier delivery.",
    icon: <HeroSection.PlaceholderIcon />,
  },
  {
    title: "End-to-End Support",
    description:
      "From concept to deployment – we walk the entire journey with you.",
    icon: <HeroSection.PlaceholderIcon />,
  },
];

export const footerCards = [
  {
    title: "Client-Centric",
    description:
      "We maintain constant communication and make sure your voice remains central throughout the process.",
    icon: <HeroSection.ServiceIcon />,
  },
  {
    title: "Agile-Driven",
    description:
      "We follow Agile methodology to adapt, iterate, and deliver fast — keeping you in the loop, every step of the way.",
    icon: <HeroSection.PlaceholderIcon />,
  },
  {
    title: "Cost-Effective",
    description:
      "Our development process is lean and focused, eliminating unnecessary expenses while maintaining top-tier delivery.",
    icon: <HeroSection.PlaceholderIcon />,
  },

];

// Mock data for web development services
export const webServices = [
  { title: "Web Development" },
  { title: "Mobile Development" },
  { title: "UI/UX Design" },
  { title: "API Development" },
  { title: "Cloud Solutions" },
  { title: "E-commerce Development" },
  { title: "Yeadachum Pandrom" },
];

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <HeroSection />
      <ValueProposition />
      <OurServices />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Layout;
