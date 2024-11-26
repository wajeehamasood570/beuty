import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import sunscreen from '../assets/sunscreen.png'
import aging from '../assets/aging.png'
import bright from '../assets/bright.png'
import night from '../assets/night.png'
import soothing from '../assets/soothing.png'
import hydrating from '../assets/hydrating.png'

const products = [
  {
    title: "Sun Creams",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    image: sunscreen,
  },
  {
    title: "Anti-Aging Creams",

    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    image: aging,
  },
  {
    title: "Night Creams",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    image: night,
  },
  {
    title: "Hydrating Creams",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    image: hydrating,
  },
  {
    title: "Brightening Creams",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    image: bright,
  },
  {
    title: "Soothing Creams",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when.",
    image: soothing,
  },
];

const FeaturedProducts = () => {
  return (
    <Box className="featuredproducts">
    <Box sx={{ px: 2, py: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "500", textAlign: "center" , fontSize:"64px"}}
      >
        Our Featured Products
      </Typography>
      <Grid container spacing={4} sx={{padding:"50px"}}>
        {products.map((product, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                boxShadow:"none",
              }}
            >
              {/* Image on the left */}
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{
                  width: { xs: "100%", md: "197px" },
                  height: "187px",
                  objectFit: "cover",
                  borderLeft:"4px solid #BD6E1E"
                }}
              />
              {/* Content on the right */}
              <CardContent sx={{ flex: 1, p: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {product.title}
                </Typography>
                <Typography color="text.secondary" sx={{
                    fontSize:"24px",
                    fontWeight:"500",
                    color:"#666666"
                }}>
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default FeaturedProducts;
