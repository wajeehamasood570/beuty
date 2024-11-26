import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PremiumProduct from "../assets/premiumproduct.png";
import AloeVeraImg from '../assets/aloevera.png';
import OrganicImg from '../assets/organic.png';
import JojobaImg from '../assets/jojoba.png';

const PremiumProductsSection = () => {
  const backgroundImage = "../assets/premiumbg.png"; // Replace with your image path

  return (
    <Box className="premiumbg">
      {/* Left Side Content */}
      <Box
        sx={{
          flex: 1,
          color: "#fff",
          justifyContent: "flex-start",
          padding: { xs: "10px", md: "20px" },
          maxWidth: {xs:"100%", md:"50%"},
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "64px" }, // Adjusted font size for mobile
            lineHeight: { xs: "40px", md: "75px" }, // Adjusted line height
            fontWeight: "400",
            fontFamily: "Roboto Condensed",
            color: "#111633",
            textAlign: "center",
          }}
        >
          Premium <br />
          <span
            sx={{
              fontSize: { xs: "30px", md: "64px" }, // Adjusted font size for mobile
              lineHeight: { xs: "40px", md: "75px" }, // Adjusted line height
              fontWeight: "700",
              fontFamily: "Roboto Condensed",
            }}
          >
            Quality Products
          </span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "10px",
            fontSize: { xs: "16px", md: "24px" }, // Adjusted font size for mobile
            lineHeight: { xs: "24px", md: "28px" }, // Adjusted line height
            fontWeight: "400",
            fontFamily: "Roboto Condensed",
            color: "#3F3F3F",
            textAlign: "center",
          }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page like readable English.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginTop: "20px",
            fontSize: { xs: "18px", md: "24px" }, // Adjusted font size for mobile
            lineHeight: { xs: "22px", md: "28px" }, // Adjusted line height
            fontWeight: "400",
            fontFamily: "Roboto Condensed",
            color: "#3F3F3F",
            textAlign: "center",
          }}
        >
          What's in it?
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            marginTop: "10px",
            fontSize: { xs: "16px", md: "24px" }, // Adjusted font size for mobile
            lineHeight: { xs: "20px", md: "24px" }, // Adjusted line height
            fontWeight: "500",
            fontFamily: "Roboto Condensed",
            color: "#414141",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            {/* Aloe Vera Box */}
            <Box sx={{ textAlign: "center" }}>
              <img
                src={AloeVeraImg}
                alt="Aloe Vera"
                style={{ width: "80px", height: "82px" }}
              />
              <Typography
                variant="body2"
                sx={{
                  marginTop: "10px",
                  fontSize: { xs: "14px", md: "16px" }, // Adjusted font size for mobile
                  lineHeight: { xs: "18px", md: "22px" }, // Adjusted line height
                  fontWeight: "500",
                  fontFamily: "Roboto Condensed",
                  color: "#414141",
                }}
              >
                Aloe Vera
              </Typography>
            </Box>

            {/* Organic Box */}
            <Box sx={{ textAlign: "center" }}>
              <img
                src={OrganicImg}
                alt="Organic"
                style={{ width: "80px", height: "82px" }}
              />
              <Typography
                variant="body2"
                sx={{
                  marginTop: "10px",
                  fontSize: { xs: "14px", md: "16px" }, // Adjusted font size for mobile
                  lineHeight: { xs: "18px", md: "22px" }, // Adjusted line height
                  fontWeight: "500",
                  fontFamily: "Roboto Condensed",
                  color: "#414141",
                }}
              >
                Organic
              </Typography>
            </Box>

            {/* Jojoba Extract Box */}
            <Box sx={{ textAlign: "center" }}>
              <img
                src={JojobaImg}
                alt="Jojoba Extract"
                style={{ width: "80px", height: "82px" }}
              />
              <Typography
                variant="body2"
                sx={{
                  marginTop: "10px",
                  fontSize: { xs: "14px", md: "16px" }, // Adjusted font size for mobile
                  lineHeight: { xs: "18px", md: "22px" }, // Adjusted line height
                  fontWeight: "500",
                  fontFamily: "Roboto Condensed",
                  color: "#414141",
                }}
              >
                Jojoba Extract
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PremiumProductsSection;
