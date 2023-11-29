"use client";
import {
  Box,
  Toolbar,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import Drawer from "./components/Drawer";
import useAppStore from "./useAppStore";
import { useEffect } from "react";
import Circle from "@uiw/react-color-circle";
export default function Page(): JSX.Element {
  const { products, initFetch } = useAppStore();
  useEffect(() => {
    initFetch();
  }, []);
  return (
    <>
      <Drawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h3">HOME</Typography>
        <Grid container spacing={4}>
          {products.length > 0 &&
            products.map((product) => {
              return (
                <Grid item xs key={product.id}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={product.image}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                      <Circle
                        colors={product.colors.map((color) => color.code)}
                      />
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" size="large">
                        Place Order
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
}
