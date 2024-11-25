import React from "react";
import { Box, Grid, Typography, Button, TextField } from "@mui/material";

const DynamicSection = ({ image, contentSide, content }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fa",
        py: 4,
        px: 2,
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
          flexDirection: { xs: "column", md: contentSide === "left" ? "row-reverse" : "row" },
        }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
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
        <Grid item xs={12} md={6}>
          <Box>
            {content.type === "form" ? (
              <>
                <Typography variant="h4" gutterBottom>
                  Stay Updated
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Subscribe to our newsletter for the latest news and updates.
                </Typography>
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: { xs: "column", sm: "row" },
                    mt: 2,
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Enter Your Email"
                    variant="outlined"
                  />
                  <Button variant="contained" sx={{ px: 3, py: 1.5 }}>
                    Subscribe
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Typography variant="h4" gutterBottom>
                  {content.title}
                </Typography>
                <Typography variant="body1">{content.description}</Typography>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DynamicSection;
