import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

// Importing images
import backgroundImage from "../assets/footer.png"; // Footer background
import footerImage1 from "../assets/footerimage1.png"; // First news image
import footerImage2 from "../assets/footerimage2.png"; // Second news image
import logo from "../assets/logo.png";
import '../App.css'

const Footer = () => {
  return (
    <Box className="footerbg"
    >
      <Box
        sx={{
          padding: "10px ",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={logo} style={{ width: "auto", height: "26px" }} />

        {/* Top Row: Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          <Typography
            style={{ color: "#111633", fontSize: "24px", fontWeight: "600" }}
          >
            Follow Us
          </Typography>
          <FacebookIcon
            sx={{
              fontSize: "24px",
              color: "#111633",
              cursor: "pointer",
              "&:hover": { color: "#3b5998" },
            }}
          />
          <PinterestIcon
            sx={{
              fontSize: "24px",
              color: "#111633",
              cursor: "pointer",
              "&:hover": { color: "#bd081c" },
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "24px",
              color: "#111633",
              cursor: "pointer",
              "&:hover": { color: "#e4405f" },
            }}
          />
        </Box>
      </Box>

      {/* Main Footer Content */}
      <Grid container spacing={3}>
        {/* Navigation Links */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", marginBottom: "16px", fontSize: "36px", lineHeight:"43px", fontWeight:"700"  }}
          >
            Explore
          </Typography>
          <Link
            href="#"
            color="#3F3F3F"
            underline="none"
            sx={{ display: "block", margin: "8px 0", fontSize: "24px", lineHeight:"36px", fontWeight:"600" }}
          >
            Home
          </Link>
          <Link
            href="#"
            color="#3F3F3F"
            underline="none"
            sx={{ display: "block", margin: "8px 0", fontSize: "24px", lineHeight:"36px", fontWeight:"600" }}
          >
            Blog
          </Link>
          <Link
            href="#"
            color="#3F3F3F"
            underline="none"
            sx={{ display: "block", margin: "8px 0", fontSize: "24px", lineHeight:"36px", fontWeight:"600" }}
          >
            Contact us
          </Link>
          <Link
            href="#"
            color="#3F3F3F"
            underline="none"
            sx={{ display: "block", margin: "8px 0", fontSize: "24px", lineHeight:"36px", fontWeight:"600" }}
          >
            Services
          </Link>
        </Grid>

        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", marginBottom: "16px" , fontSize: "36px", lineHeight:"43px", fontWeight:"700" }}
          >
            About Us
          </Typography>
          <Typography
            variant="body2"
            sx={{ margin: "8px 0", fontSize: "24px", lineHeight:"36px", fontWeight:"600", lineHeight: "1.8", color:"#3F3F3F" }}
          >
            (456) 789-12301
          </Typography>
          <Typography
            variant="body2"
            sx={{ margin: "8px 0", fontSize: "24px", lineHeight:"36px", fontWeight:"600", lineHeight: "1.8", color:"#3F3F3F"  }}
          >
            info@modrino.co.uk
          </Typography>
          <Typography
            variant="body2"
            sx={{ margin: "8px 0", fontSize: "24px", lineHeight:"36px", fontWeight:"600", lineHeight: "1.8", color:"#3F3F3F"  }}
          >
            South 13th Street, New York, America
          </Typography>
        </Grid>

        {/* Recent News */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", marginBottom: "16px", fontSize: "36px", lineHeight:"43px", fontWeight:"700" }}
          >
            Recent News
          </Typography>
          {/* News 1 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0",
              gap: "10px",
            }}
          >
            <img
              src={footerImage1}
              alt="Anti-Aging Cream"
              style={{
                width: "100px",
                height: "60px",
                borderRadius: "8px",
              }}
            />
            <Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "12px", color: "#111633" }}
              >
                June 14, 2024
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "24px", lineHeight:"36px", fontWeight:"600" }}
              >
                Anti-Aging Cream
              </Typography>
            </Box>
          </Box>
          {/* News 2 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0",
              gap: "10px",
            }}
          >
            <img
              src={footerImage2}
              alt="Night Cream"
              style={{
                width: "100px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
            <Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "12px", color: "#111633" }}
              >
                June 14, 2024
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", fontSize: "24px", lineHeight:"36px", fontWeight:"600" }}
              >
                Night Cream
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Footer Section */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          marginTop: "40px",
          paddingTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Copyright Text */}
        <Typography
          variant="body2"
          sx={{
            color: "#111633",
            fontSize: "24px", lineHeight:"36px", fontWeight:"600",
            textAlign: "center",
            flex: "1",
          }}
        >
          © 2024 Bake House. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
