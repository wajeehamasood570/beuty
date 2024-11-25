import React from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../assets/SpecialOffer.png"
import '../App.css'

const SpecialOfferSection = () => {
  return (
    <Box
      className="offerbg"
    >
      {/* Left Side: Text */}
      <Box sx={{ maxWidth: "40%" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "500",
            fontSize:'64px',
            lineHeight:'75px',
            color:'#111633',  
            mb: 2,  
          }}
        >
          Special Offer!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "400",
            fontSize:'48px',
            lineHeight:'56.25px',
            color:'#111633',  
            mb: 3
          }}
        >
          30% Discount
        </Typography>
        <Button
          // variant="contained"
          sx={{
            // backgroundColor: "#FFD700", // Golden button
            color: "#111633",
            fontWeight: "400px",
            fontSize:'48px',
            // lineHeight:'56.25',
            px: 4,
            py: 1,
          }}
        >
          Order Now →
        </Button>
      </Box>

      {/* Right Side: Just Empty Space */}
      <Box sx={{ flex: 1 }} />
    </Box>
  );
};

export default SpecialOfferSection;
