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
import { PageProvider, useAppStoreCtx } from "./context";
import { NextPage } from "next";

const PageContainer: NextPage = () => {
  const { products, filter, fetchProducts, initFetch } = useAppStoreCtx();
  useEffect(() => {
    initFetch();
  }, []);
  useEffect(() => {
    fetchProducts();
  }, [filter]);
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
};

const Page: NextPage = () => {
  const store = useAppStore();
  return (
    <PageProvider value={store}>
      <PageContainer />
    </PageProvider>
  );
};

export default Page;
