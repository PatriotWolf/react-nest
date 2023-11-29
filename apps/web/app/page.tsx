"use client";
import { Box, Toolbar, Typography } from "@mui/material";
import Drawer from "./components/Drawer";

export default function Page(): JSX.Element {
  return (
    <>
      <Drawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h3">HOME</Typography>
      </Box>
    </>
  );
}
