import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import bg from "../assets/bg.png";
import "../App.css";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <Box className="headerbg">
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // height: "calc(100vh - 64px)", // Subtract AppBar height for proper layout
          padding: "20px",
          color: "#fff",
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            display: "flex", // Enables flex layout
            alignItems: "center", // Vertically centers the content
            justifyContent: "flex-start", // Aligns content to the left
            // height: "100vh", // Full height for the Hero section
            padding: "20px",
            color: "#fff",
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              Width: "80%", // Optional: Limits the width of the text content
              textAlign: "left", // Ensures text is left-aligned
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: {xs:"30px",md:"50px", lg:"96px"},
                color: "#111633",
              }}
            >
              <span
                style={{
                  fontWeight: "200",
                }}
              >
                {" "}
                Enhance{" "}
              </span>{" "}
              <br />
              your Natural <br />
              Radiance
            </Typography>
            <Button
              variant="contained"
              color="#E3E3E3"
              sx={{
                marginTop: "20px",
                backgroundColor: "#111633",
                fontFamily: "Poppins",
                fontSize: "24px",
                fontWeight: "600",
                lineHeight: "36px",
                textTransform:"capitalize"
              }}
            >
              Order Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
