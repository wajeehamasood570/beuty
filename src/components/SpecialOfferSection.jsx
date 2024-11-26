import React from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../assets/SpecialOffer.png";
import "../App.css";

const SpecialOfferSection = () => {
  return (
    <Box
      className="offerbg"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens, horizontally on medium+
        height: { xs: "400px", md: "711px" }, // Full viewport height
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Side: Text */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Distribute the space
          maxWidth: "40%",
          marginY: { xs: "20px", md: "50px auto" }, // Adjust padding for small and large screens
          color: "#111633",
          height: "90%", // Full height
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "500",
              fontSize: { xs: "20px", md: "64px" }, // Smaller font size for small screens
              lineHeight: { xs: "30px", md: "75px" }, // Adjusted line height for small screens
              color: "#111633",
              fontFamily: "Roboto Condensed",
              mb: 2,
            }}
          >
            Special Offer!
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "400",
              fontSize: { xs: "24px", md: "48px" }, // Smaller font size for small screens
              lineHeight: { xs: "32px", md: "56.25px" }, // Adjusted line height for small screens
              color: "#111633",
              fontFamily: "Roboto Condensed",
              mb: 3,
            }}
          >
            30% Discount
          </Typography>
        </Box>

        <Button
          sx={{
            color: "#111633",
            fontWeight: "400",
            fontSize: { xs: "14px", md: "48px" }, // Adjusted smaller font size for small screens
            lineHeight: { xs: "24px", md: "56.25px" }, // Adjusted line height for small screens
            py: 2,
            alignSelf: "flex-start", // Align the button to the left (optional)
            fontFamily: "Roboto Condensed",
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
