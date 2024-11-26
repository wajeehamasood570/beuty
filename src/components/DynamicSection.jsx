import React from "react";
import { Box, Grid, Typography, Button, TextField } from "@mui/material";

const DynamicSection = ({ image, contentSide, content }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        py: 4,
        px: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{
          flexDirection: {
            xs: "column-reverse",
            md: contentSide === "left" ? "row-reverse" : "row",
          },
        }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={image}
            alt="Dynamic Section"
            sx={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} md={7} sx={{display:"flex",
          justifyContent:"center"
        }}>
          <Box>
            {content.type === "form" ? (
              <>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontSize: {xs:"30px", md:"64px"},
                    lineHeight: "75px",
                    fontWeight: "500",
                    fontFamily: "Roboto Condensed",
                    color: "#000000",
                  }}
                >
                  Stay Updated
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    fontSize: "32px",
                    lineHeight: "37px",
                    fontWeight: "500",
                    fontFamily: "Roboto Condensed",
                    color: "#3f3f3f",
                  }}
                >
                 Subscribe to our newsletter for latest news and blogs and for important information,stay tuned.
                </Typography>
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    mt: 2,
                    
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Enter Your Email"
                    
                    sx={{
                      backgroundColor: "#EFEFEF",
                      fontSize: "32px",
                    lineHeight: "37px",
                    fontWeight: "500",
                    fontFamily: "Roboto Condensed",
                    color:"#3F3F3F",
                    // width:"770px",
                    "& fieldset": {
                        border: "none", // Removes the outlined border
                      },
                      "& input::placeholder": {
                        color: "#3F3F3F", // Placeholder text color
                        fontSize: "32px", // Adjust font size for placeholder
                        fontFamily: "Roboto Condensed",
                      },
              
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{ px: 5, py: 1.5, backgroundColor: "#111633" ,
                        fontSize: "32px",
                    lineHeight: "37px",
                    fontWeight: "500",
                    fontFamily: "Roboto Condensed",
                    color: "#E8E8E8",
                    textTransform:"capitalize",
                    }}
                    
                  >
                    Subscribe
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography variant="h4" gutterBottom
                sx={{
                    fontSize: {xs:"30px", md:"64px"},
                    lineHeight: "75px",
                    fontWeight: "500",
                    fontFamily: "Roboto Condensed",
                    color: "#000000",
                    textTransform:"capitalize", 
                    textAlign:"center" 
                }}>
                  {content.title}
                </Typography>
                <Typography variant="body1"
                sx={{
                    fontSize: "28px",
                    lineHeight: "32px",
                    fontWeight: "500",
                    fontFamily: "Roboto Condensed",
                    color: "#3F3F3F",
                    textTransform:"capitalize",
                    textAlign:"center",
                }}>{content.description}</Typography>
                  <Button
                    variant="contained"
                    sx={{ px: 5, py: 1.5, backgroundColor: "#111633" ,
                        fontSize: "32px",
                    lineHeight: "37px",
                    fontWeight: "500",
                    fontFamily: "Roboto Condensed",
                    color: "#E8E8E8",
                    textTransform:"capitalize",
                    textAlign:"center", 
                    display:"flex",
                    justifyContent:"center",
                    alignItems: "center", // Ensures the text is vertically centered
    margin: "0 auto", 
                    }}
                    
                  >
                    Read More  
                  </Button>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DynamicSection;
