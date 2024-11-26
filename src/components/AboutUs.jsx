import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import "../App.css";

const AboutUs = () => {
  return (
    <Box
      className="about-section"
      sx={{
        backgroundImage: `url('/path/to/your/image.jpg')`, // Set your background image here
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents image from repeating
        padding: { xs: "40px 10px", md: "60px" }, // Padding for different screen sizes
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: { xs: "30px", md: "64px" },
            lineHeight: { xs: "40px", md: "75px" },
            fontWeight: "500",
            fontFamily: "Roboto Condensed",
            color: "#111633",
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: "16px", md: "24px" },
            lineHeight: { xs: "24px", md: "28px" },
            fontWeight: "500",
            fontFamily: "Roboto",
            color: "#3F3F3F",
          }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#111633",
            color: "#fff",
            "&:hover": { backgroundColor: "#333" },
            fontSize: { xs: "16px", md: "24px" },
            lineHeight: { xs: "24px", md: "36px" },
            fontWeight: "600",
            fontFamily: "Poppins",
            marginTop: "40px",
          }}
        >
          Read More
        </Button>
      </Container>
    </Box>
  );
};

export default AboutUs;
