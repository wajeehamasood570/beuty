import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

// Importing images
import backgroundImage from "../assets/footer.png"; // Footer background
import footerImage1 from "../assets/footerimage1.png"; // First news image
import footerImage2 from "../assets/footerimage2.png"; // Second news image
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import pinterest from "../assets/pinterest.png";
import logo from "../assets/logo.png";
import "../App.css";

const Footer = () => {
  return (
    <Box className="footerbg">
      <Box
        sx={{
          padding: "10px ",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <img
          src={logo}
          style={{ 
            width: "auto", 
            height: { xs: "auto", md: "26px" }
         }}
        />

        {/* Top Row: Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <Typography
            style={{
              color: "#111633",
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "Inter",
            }}
          >
            Follow Us
          </Typography>
          <img src={facebook} />
          <img src={pinterest} />
          <img src={whatsapp} />
          <img src={instagram} />
          {/* <FacebookIcon
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
          /> */}
        </Box>
      </Box>

      {/* Main Footer Content */}
      <Grid container spacing={3}>
        {/* Navigation Links */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="subtitle1"
            sx={{
              marginBottom: "16px",
              fontSize: "36px",
              lineHeight: "43px",
              fontWeight: "700",
              fontFamily: "Inter",
            }}
          >
            Explore
          </Typography>
          <Link
            href="#"
            color="#3F3F3F"
            underline="none"
            sx={{
              display: "block",
              margin: "8px 0",
              fontSize: "24px",
              lineHeight: "36px",
              fontWeight: "500",
              fontFamily: "Poppins",
            }}
          >
            Home
          </Link>
          <Link
            href="#"
            color="#3F3F3F"
            underline="none"
            sx={{
              display: "block",
              margin: "8px 0",
              fontSize: "24px",
              lineHeight: "36px",
              fontWeight: "500",
              fontFamily: "Poppins",
            }}
          >
            Blog
          </Link>
          <Link
            href="#"
            color="#3F3F3F"
            underline="none"
            sx={{
              display: "block",
              margin: "8px 0",
              fontSize: "24px",
              lineHeight: "36px",
              fontWeight: "500",
              fontFamily: "Poppins",
            }}
          >
            Contact us
          </Link>
          <Link
            href="#"
            color="#3F3F3F"
            underline="none"
            sx={{
              display: "block",
              margin: "8px 0",
              fontSize: "24px",
              lineHeight: "36px",
              fontWeight: "500",
              fontFamily: "Poppins",
            }}
          >
            Services
          </Link>
        </Grid>

        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="subtitle1"
            sx={{
              marginBottom: "16px",
              fontSize: "36px",
              lineHeight: "43px",
              fontWeight: "700",
              fontFamily: "Inter",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              margin: "8px 0",
              fontSize: "24px",
              lineHeight: "36px",
              fontWeight: "500",
              color: "#3F3F3F",
              fontFamily: "Poppins",
            }}
          >
            (456) 789-12301
          </Typography>
          <Typography
            sx={{
              margin: "8px 0",
              fontSize: "24px",
              lineHeight: "36px",
              fontWeight: "500",
              color: "#3F3F3F",
              fontFamily: "Poppins",
            }}
          >
            info@modrino.co.uk
          </Typography>
          <Typography
            sx={{
              margin: "8px 0",
              fontSize: "24px",
              lineHeight: "36px",
              fontWeight: "500",
              color: "#3F3F3F",
              fontFamily: "Poppins",
            }}
          >
            South 13th Street,
          </Typography>
          <Typography
            sx={{
              margin: "8px 0",
              fontSize: "24px",
              lineHeight: "36px",
              fontWeight: "500",
              color: "#3F3F3F",
              fontFamily: "Poppins",
            }}
          >
            New York, America
          </Typography>
        </Grid>

        {/* Recent News */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="subtitle1"
            sx={{
              marginBottom: "16px",
              fontSize: "36px",
              lineHeight: "43px",
              fontWeight: "700",
              fontFamily: "Inter",
            }}
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
                sx={{
                  fontSize: "18px",
                  color: "#111633",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                }}
              >
                June 14, 2024
              </Typography>
              <Typography
                sx={{

                  fontSize: "24px",
                  lineHeight: "36px",
                  fontWeight: "500",
                  fontFamily: "Poppins",
                }}
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
                sx={{
                  fontSize: "18px",
                  color: "#111633",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                }}
              >
                June 14, 2024
              </Typography>
              <Typography
                sx={{

                  fontSize: "24px",
                  lineHeight: "36px",
                  fontWeight: "500",
                  fontFamily: "Poppins",
                }}
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
          sx={{
            color: "#737373",
            fontSize: "24px",
            lineHeight: "36px",
            fontWeight: "600",
            textAlign: "center",
            flex: "1",
            fontFamily: "Inter",
          }}
        >
          © 2024 Bake House. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
